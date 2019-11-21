const express = require('express')
const Route = express.Router()

const getHirePart = require('../controller/hirepart')
const { validateLogin } = require('../helpers/auth')

Route
  .get('/', getHirePart.getHire)
  .post('/', getHirePart.postHire)
  .put('/:id', getHirePart.putHire)
  .delete('/:id', getHirePart.deleteHire)

module.exports = Route
