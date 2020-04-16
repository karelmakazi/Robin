const express = require('express')
const db = ('../db.js')
const router = express.Router()

router.use(express.json())

module.exports = router

//GET / :Checks for active focusses
router.get('/active', (req, res) => {
  db.checkActive()
  .then(result => {
    res.json(result)
  })
})