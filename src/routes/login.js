const express = require('express')
const Route = express.Router()

const { getUname } = require('../controller/login')

Route
  .post('/', getUname)

module.exports = Route
