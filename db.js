const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'ASUSZEN',
    port: 1433, // Your database port
    database: 'Employees',
    username: 'sa',
    password: '14321432',
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true, // Use this if you're on Windows Azure
      },
    },
  });
  module.exports = {sequelize};