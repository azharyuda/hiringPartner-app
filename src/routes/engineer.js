const express = require('express')
const Route = express.Router()
const engineerController = require('../controller/engineer')

Route
  .get('/', engineerController.getAll)
  .get('/search', engineerController.getEngineer)
  .post('/postEngineer', engineerController.addEngineer)
  .delete('/:id', engineerController.deleteEngineer)
  .put('/:id', engineerController.putEngineer)

module.exports = Route
