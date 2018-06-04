exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolutions_table', table => {
    table.increments('id').primary();
    table.string('dueDate');
    table.text('resolution');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resolutions_table')
};
