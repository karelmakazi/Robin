exports.up = (knex) => {
  return knex.schema.createTable('focus', table => {
    table.increments('focus_id').primary()
    table.timestamp('f_timestamp').defaultTo(knex.fn.now())
    table.string('f_area')
    table.string('f_detail')
    table.integer('f_duration')
    table.boolean('f_status')
})
}

exports.down = (knex) => {
  return knex.schema.dropTable('focus')
}