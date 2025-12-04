const dbConnect = require('../config/db.config');
const { DataTypes } = require('sequelize');
const Booking = dbConnect.define('Booking', {
date:{
    type: DataTypes.STRING,
    allowNull: false,
},
details:{
    type:DataTypes.STRING,
    allowNull:false,
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
},
firstName: {
  type: DataTypes.STRING,
  allowNull: false,
},
lastName: {
  type: DataTypes.STRING,
  allowNull: false,
},
location:{
    type:DataTypes.STRING,
    allowNull:false,
},
phone:{
    type:DataTypes.STRING,
    allowNull:false,
},
service:{
    type:DataTypes.STRING,
    allowNull:false,
},
status:{
    type:DataTypes.STRING,
    allowNull:false,
},
teamMember:{
    type:DataTypes.STRING,
    allowNull:false,
},
time:{
    type:DataTypes.STRING,
    allowNull:false,
},
});
module.exports = Groups;