exports.up = function(knex) {
    return knex.schema.createTable('config', function(table) {
        table.string('url_live');
        table.boolean('live');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('config');
};
