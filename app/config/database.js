const Knex = require('knex');
const knexfile = require('../../knexfile');

const knexConfig = Knex(knexfile.development);

module.exports = knexConfig;
