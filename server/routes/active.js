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

