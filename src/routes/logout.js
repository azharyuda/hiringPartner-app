const express = require('express')
const Route = express.Router()

const { deleteToken } = require('../controller/logout')

Route
  .post('/', deleteToken)

module.exports = Route
