const express = require('express')
const Route = express.Router()

const { deleteToken } = require('../controller/logout')

Route
  .put('/', deleteToken)

module.exports = Route
