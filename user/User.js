const Sequelize = require("sequelize");
const connection = require("../database/database");
const Team = require("../team/Team");

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

//Team.hasMany(User);
//User.belongsTo(Team);

//User.sync({force:true});
module.exports = User;