const dbConnect = require('../config/db.config');
const { DataTypes } = require('sequelize');
const Admin = dbConnect.define('Admin', {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    });
module.exports = Admin;
