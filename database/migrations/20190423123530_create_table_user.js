module.exports = {
  up(knex) {
    return knex.schema.createTable('user', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('age').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
      table.timestamp('deletedAt').nullable();
    });
  },

  down(knex) {
    return knex.schema.dropTable('user');
  },
};
