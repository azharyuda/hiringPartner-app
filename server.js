const server = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./src/index')

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`This server is running on port ${PORT} `)
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(morgan('dev'))

server.use('/', routes)

module.exports = server
