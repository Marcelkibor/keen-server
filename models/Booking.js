const dbConnect = require('../config/db.config'); 
const { DataTypes } = require('sequelize');

const Booking = dbConnect.define('Booking', {
  date: DataTypes.STRING,
  details: DataTypes.STRING,
  email: DataTypes.STRING,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  location: DataTypes.STRING,
  phone: DataTypes.STRING,
  service: DataTypes.STRING,
  status: DataTypes.STRING,
  teamMember: DataTypes.STRING,
  time: DataTypes.STRING,
});

module.exports = Booking;
