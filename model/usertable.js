
 const Sequelize = require('sequelize');
 const sequelize = require('./database');

 const User = sequelize.define('User',{
    id:{
              type:Sequelize.DataTypes.INTEGER,
              autoIncrement:true,
              
              primaryKey:true
          },
          name:{
              type:Sequelize.DataTypes.STRING,
        
            
          },
          description:{
              type:Sequelize.DataTypes.STRING,
      
      
          },
          price:{
              type:Sequelize.DataTypes.INTEGER,
    
          },
          quantity:{
              type:Sequelize.DataTypes.INTEGER,
          }
      });
  module.exports =User;
     
  
