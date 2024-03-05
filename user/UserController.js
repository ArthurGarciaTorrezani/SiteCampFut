const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");


router.get("/newUser",(req,res)=>{
     res.render("user/newUser");
});

router.post("/createUser",(req,res)=>{
     var nome = req.body.nome;
     var ra = req.body.ra;
     var curso = req.body.curso;
     var email = req.body.email;
     var senha = req.body.senha;

     //criptografia da senha
     var salt = bcrypt.genSaltSync(10);
     var hash = bcrypt.hashSync(senha,salt);

     User.create({
          name:nome,
          ra:ra,
          curso:curso,
          password:senha
     });

     res.json({nome,ra,curso,email,senha});
});

module.exports = router;