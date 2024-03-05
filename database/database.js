const Sequelize = require("sequelize");
const connection = new Sequelize('bdcampfut','root',"Tetecaralho123!",{
     host:'localhost', // falar em qual servidor o bd está
     dialect:'mysql' // falar com qual tipo de bd vai se conectar
});

module.exports = connection;