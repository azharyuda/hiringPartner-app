const express = require('express')
const Route = express.Router()

const controllerUser = require('../controller/user')

Route
  .get('/', controllerUser.getUser)
  .post('/', controllerUser.addUser)
  .put('/:id', controllerUser.updateUser)
  .delete('/:id', controllerUser.deleteUser)

module.exports = Route
