const express = require('express')
const Route = express.Router()

const getSkill = require('../controller/skill')

Route
  .get('/', getSkill.getSkill)
  .post('/', getSkill.postSkill)
  .put('/:skill_id', getSkill.putSkill)
  .delete('/:skill_id', getSkill.deleteSkill)
  .post('/detailSkill/post/', getSkill.postDetailSkill)
  .put('/detailSkill/update/:id', getSkill.putDetailSkill)
module.exports = Route
