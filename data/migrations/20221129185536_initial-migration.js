/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name', 50).notNullable()
            table.string('project_description', 250)
            table.boolean('project_completed')
                 .defaultTo(false)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name')
                 .notNullable()
                 .unique()
            table.string('resource_description',200)
        })
        .createTable('tasks', table => {
            table.increments('task_id')
            table.string('task_description')
                 .notNullable()
            table.string('task_notes')
            table.boolean('task_completed')
                 .defaultTo(0)
            table.integer('project_id')
                 .unsigned()
                 .notNullable()
                 .references('project_id')
                 .inTable('projects')
                 .onUpdate('RESTRICT')
                 .onDelete('RESTRICT')
        })
        .createTable('project_and_resources', table => {
            table.increments('pro_and_res_id')
            table.integer('project_id')
                 .unsigned()
                 .notNullable()
                 .references('project_id')
                 .inTable('projects')
                 .onUpdate('RESTRICT')
                 .onDelete('RESTRICT')
            table.integer('resource_id')
                 .unsigned()
                 .notNullable()
                 .references('resource_id')
                 .inTable('resources')
                 .onUpdate('RESTRICT')
                 .onDelete('RESTRICT')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_and_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
