/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) => knex.schema.createTable('uploads', (table) => {
  table.increments(); // make primary key 
  table.string('title').notNullable();
  table.integer('created_by').references('id').inTable('users').notNullable().onDelete('CASCADE');
  table.string('before_image').notNullable();
  table.string('job_description').notNullable();
  table.string('location').notNullable();
  table.boolean('under_contract').defaultTo(false);
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => knex.schema.dropTable('uploads');
