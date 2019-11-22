const express = require('express')
const Route = express.Router()
const engineerController = require('../controller/engineer')

Route
  .get('/', engineerController.getAll)
  .get('/search', engineerController.getEngineer)
  // .get('/sort', engineerController.sort)
  // .get('/page', engineerController.engineerPage)
  .post('/postEngineer', engineerController.addEngineer)
  .delete('/:id', engineerController.deleteEngineer)
  .put('/:id', engineerController.putEngineer)

module.exports = Route
