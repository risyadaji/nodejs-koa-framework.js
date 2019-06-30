const { Model } = require('objection');
const { camelCase } = require('lodash');
const connection = require('../config/database');

class BaseModel extends Model {
  static get tableName() {
    return camelCase(this.name);
  }

  $beforeInsert() {
    const timestamp = new Date();

    this.createdAt = timestamp;
    this.updatedAt = timestamp;
  }

  $beforeUpdate() {
    const timestamp = new Date();

    this.updatedAt = timestamp;
  }
}

BaseModel.knex(connection);

module.exports = { BaseModel };
