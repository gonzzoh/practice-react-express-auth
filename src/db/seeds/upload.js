/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('uploads').del()
  
  await knex.table('uploads').insert([
    {
      title: 'test',
      created_by: 1,
      before_image: 'test',
      job_description: 'test',
      location: 'test',
      under_contract: false,
    }
  ])

};
