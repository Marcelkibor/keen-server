require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true  
    }
  }
);

sequelize.sync({ alter: true })
  .then(() => console.log('DB synced successfully.'))
  .catch(err => console.error(err));

module.exports = sequelize;