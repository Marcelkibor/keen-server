require('dotenv').config();
const { Sequelize } = require('sequelize');

const dbConnect = new Sequelize( 
  process.env.DATABASE, 
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
});
dbConnect.authenticate()
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error('Unable to connect to the database:', err));
  
module.exports = dbConnect;