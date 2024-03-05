const express = require("express"); // framework simplifica a criacao de um servidos em poucas linhas
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const userController = require("./user/UserController");

const User = require("./user/User");

// setando a view engine que vai fazer o html ser renderizado quando a pagina for passada pelas rotas podendo usar o node entre o html
app.set('view engine','ejs');

// configurar express para trabalhar com aquivos estaticos(css, img, js frontend)
app.use(express.static('public')); // public é a pasta onde estes arquivos irao ficar

// setando o body-parser para usar formularios
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// conectando com o bd
connection
     .authenticate()
     .then(()=>{
          console.log("conectadoaaaa");
     }).catch((error)=>{
          console.log(error);
     }) 

app.use("/",userController);

app.get('/',(req,res)=>{ // na rota '/' ele manda um hello world
     res.render("index"); // o ejs ja identifica e busca os arquivos dentro da pasta view sem precisar colocar todo o caminho
});

app.listen(8080,()=>{ // ligando o servidor
     console.log("server rodando");
});