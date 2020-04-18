const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = knex(config)
// const connection = require('knex')(config)

module.exports = {
  checkActive,
}

function checkActive(db = database){
  return db('focus')
  .select()
  .where({f_status: 'active'})
  .then(results => {
    return (results.length)
    })
}


