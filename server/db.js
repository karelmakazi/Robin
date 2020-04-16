const config = require('../knexfile').development
const db = require('knex')(config)

module.exports = {
  checkActive,
}

function checkActive(){
  return db('focus')
  .select(
    'focus_id as id',  
    'f_area as focus',
    'f_status as status')
  .then(results => {
    console.log(results)
  })
  
}