const { Model } = require('objection');
const { camelCase } = require('lodash');
const connection = require('../config/database');

class BaseModel extends Model {
  static get tableName() {
    return camelCase(this.name);
  }
}

BaseModel.knex(connection);

module.exports = { BaseModel };
