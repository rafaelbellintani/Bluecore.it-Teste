const table = 'Comments'
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable(table, (table) => {
        table.increments('Id')
        table.integer('PostId').unsigned()
        table.string('UserName', 255).notNullable()
        table.text('Comment', 'mediumtext').notNullable()
        table.datetime('CreatedAt').defaultTo(knex.fn.now())
        table.datetime('UpdatedAt').defaultTo(knex.fn.now())

        table.foreign('PostId').references('Posts.Id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable(table)
};
