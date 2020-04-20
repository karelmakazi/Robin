const path = require('path')
const express = require('express')
const server = express()

const active = require('./routes/active')

server.use(express.json())
server.use(express.static('public'))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', active)

module.exports = server
