const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");
const userAuth = require("../midlleware/userAuth");
// GET
router.get("/newUser", (req, res) => {
  res.render("user/newUser");
});

router.get("/loginUser",(req,res)=>{
     res.render("user/login");
});

router.get("/user/homePageUser",userAuth,(req,res)=>{
     res.render("user/restrito/homePageUser");
});

router.get("/logout",(req,res)=>{
     req.session.user = undefined;
     res.redirect("/");
});
// POST
router.post("/createUser", (req, res) => {
  var nome = req.body.nome;
  var ra = req.body.ra;
  var curso = req.body.curso;
  var senha = req.body.senha;

  //verificar se ja existe um usuario com o mesmo ra
  User.findOne({ where: { ra:ra } }).then((user) => {
    if (user == undefined) {
      //criptografia da senha
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(senha, salt);

      User.create({
        name: nome,
        ra: ra,
        curso: curso,
        password: hash,
      })
        .then(() => {
          res.redirect("/loginUser")
        })
        .catch((erro) => {
          res.send(erro);
        });
    } else {
      res.send("ja existe");
    }
  });
});

router.post("/authenticateUser",(req,res)=>{
     var ra = req.body.ra;
     var password = req.body.senha; 

     User.findOne({where:{ra:ra}}).then(user=>{
          if(user != undefined){
               // validar senha
               var correct = bcrypt.compareSync(password,user.password);
               if(correct){
                    req.session.user = {
                         id: user.id,
                         ra:user.ra
                    }
                   res.redirect("/user/homePageUser");
               }else{
                    res.redirect("/loginUser");
               }
          }else{
               res.redirect("/loginUser");
          }
     });
});

module.exports = router;
