const Sequelize = require('sequelize')

const db = new Sequelize({
  host: 'localhost',
  port: 5432,
  database: 'acme_schools_db2',
  dialect: 'postgres',
  username: 'postgres',
  password: 'admin',
  logging: false
})

module.exports = db;
