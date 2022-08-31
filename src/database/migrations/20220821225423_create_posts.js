const table = 'Posts'
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable(table, (table) => {
        table.increments('Id')
        table.string('Title', 255).notNullable()
        table.text('Content', 'mediumtext').notNullable()
        table.datetime('CreatedAt').defaultTo(knex.fn.now())
        table.datetime('UpdatedAt').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable(table)
};
