const skillModel = require('../models/skill')
const { response } = require('../helpers/helper')

module.exports = {
  getSkill: (req, res) => {
    skillModel.getSkill()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  postSkill: (req, res) => {
    const { skill_name } = req.body
    const data = {
      skill_name
    }
    skillModel.postSkill(data)
      .then(result => {
        response(res, 200, 'Skill has successfully added')
      })
      .catch(err => {
        console.log(err)
      })
  },

  putSkill: (req, res) => {
    const skill_id = req.params.skill_id
    const { skill_name } = req.body
    const data = {
      skill_name
    }
    skillModel.putSkill(data, skill_id, 'Skill name has successfully updated')
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  deleteSkill: (req, res) => {
    const skill_id = req.params.skill_id
    skillModel.deleteSkill(skill_id)
      .then(result => {
        response(res, 200, 'Skill has been deleted!')
      })
      .catch(err => {
        console.log(err)
      })
  },
  postDetailSkill: (req, res) => {
    const { engineer_id, skill_id, skill_level } = req.body
    const data2 = {
      skill_id,
      engineer_id,
      skill_level
    }
    skillModel.postDetailSkill(data2)
      .then(result => {
        response(res, 200, 'Your skill data has successfully saved!')
      })
      .catch(err => {
        console.log(err)
      })
  },
  putDetailSkill: (req, res) => {
    const id_detil = req.params.id_detil
    const { skill_level } = req.body
    const data2 = {
      skill_level,
      updated_at: new Date()
    }
    skillModel.putDetailSkill(data2, id_detil)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  }

}
