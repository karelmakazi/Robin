const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = knex(config)

module.exports = {
  checkActive,
  addFocus,
  getSession,
}

//CHECK IF ACTIVE FOCUS
function checkActive(db = database){
  return db('focus')
  .select()
  .where({f_status: 'active'})
  .then(results => {
    return (results.length)
    })
}


//GET FOCUS DETAILS TO DISPLAY IN /Session  
function getSession(db = database){
  return db('focus')
  .select('focus_id as id',
    'f_area as area',
    'f_duration as duration',
    'f_detail as detail')
  .where({f_status: 'active'})
  .then(results => {
    return(results);
  })
}

//POST NEW FOCUS TO DB 
function addFocus(newFocus, db = database){
  return db('focus')
  .insert({
    f_timestamp: newFocus.f_timestamp,
    f_area: newFocus.f_area,
    f_detail: JSON.stringify(newFocus.f_detail),
    f_duration: newFocus.f_duration,
    f_status: 'completed'
  })
}