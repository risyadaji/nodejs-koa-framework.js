module.exports = {
  seed(knex) {
    // Deletes ALL existing entries
    return knex('user').del()
      .then(() => knex('user').insert([
        {
          id: 1,
          name: 'Foo',
          age: 11,
        },
        {
          id: 2,
          name: 'Bar',
          age: 12,
        },
        {
          id: 3,
          name: 'Baz',
          age: 13,
        },
      ]));
  },
};
