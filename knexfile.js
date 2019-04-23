const path = require('path');
require('dotenv').config();
// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEV_HOST,
      port: process.env.DB_DEV_PORT,
      database: process.env.DB_DEV_DB,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASS,
    },
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds'),
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_PROD_HOST,
      port: process.env.DB_PROD_PORT,
      database: process.env.DB_PROD_DB,
      user: process.env.DB_PROD_USER,
      password: process.env.DB_PROD_PASS,
    },
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds'),
    },
  },

};
