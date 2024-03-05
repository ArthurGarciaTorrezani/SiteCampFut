const Sequelize = require("sequelize");
const connection = require("../database/database");


const User = connection.define('user',{
     name:{
          type:Sequelize.STRING,
          allowNull:false
     },
     ra:{
          type:Sequelize.STRING,
          allowNull:false
     },
     curso:{
          type:Sequelize.STRING,
          allowNull:false
     },
     password:{
          type:Sequelize.STRING,
          allowNull:false
     }
});

User.sync({force:false});
module.exports = User;