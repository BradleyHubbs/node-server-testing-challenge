const express = require('express')
const herosRouter = require('./heros/heros-router')

const server = express()

server.use(express.json())


server.use('/heros', herosRouter)

server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server