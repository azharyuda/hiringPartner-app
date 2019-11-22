const express = require('express')
const Route = express.Router()

const getSkill = require('../controller/skill')

Route
  .get('/', getSkill.getSkill)
  .post('/', getSkill.postSkill)
  .put('/update/:skill_id', getSkill.putSkill)
  .delete('/delete/:skill_id', getSkill.deleteSkill)
  .post('/detailSkill/post/', getSkill.postDetailSkill)
  .put('/detailSkill/update/:id_detil', getSkill.putDetailSkill)
module.exports = Route
