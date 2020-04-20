const express = require('express')
const db = require('../db')
const router = express.Router()
router.use(express.json())

module.exports = router

//GET / :Checks for active focusses
router.get('/active', (req, res) => {
  db.checkActive()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//GET Focus Details for /Session
router.get('/session', (req, res) => {
  db.getSession()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


//POST /v1/focus
router.post('/focus', (req, res) => {
  console.log('active.js')
  db.addFocus(req.body)
  .then(() => {
    res.status(201).send()
    })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})