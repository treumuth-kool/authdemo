const Sequelize = require('sequelize');

const db = new Sequelize('logintest', 'root', 'suva1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;