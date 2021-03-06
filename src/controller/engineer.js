const engineerModel = require('../models/engineer')
const { response } = require('../helpers/helper')

module.exports = {
  getAll: (req, res) => {
    engineerModel.getAll()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  addEngineer: (req, res) => {
    const { name, description, location, date_of_birth, showcase_id } = req.body
    const data = {
      name,
      description,
      location,
      date_of_birth,
      showcase_id,
      created_at: new Date(),
      updated_at: new Date()
    }
    engineerModel.addEngineer(data)
      .then(result => {
        response(res, 200, 'Data is successfully saved')
      })
      .catch(err => {
        console.log(err)
      })
  },
  putEngineer: (req, res) => {
    const id = req.params.id
    const { name, description, location, date_of_birth, showcase_id } = req.body
    const data = {
      name,
      description,
      location,
      date_of_birth,
      showcase_id,
      updated_at: new Date()
    }
    engineerModel.putEngineer(data, id)
      .then(result => {
        response(res, 200, 'Data is successfully updated')
      })
      .catch(err => {
        console.log(err)
      })
  },

  deleteEngineer: (req, res) => {
    const id = req.params.id
    engineerModel.deleteEngineer(id)
      .then(result => {
        response(res, 200, 'Data is successfully Deleted')
      })
      .catch(err => {
        console.log(err)
      })
  },
  getEngineer: (req, res) => {
    const skill_name = req.query.skill_name
    const name = req.query.name
    const sortParam = req.query.sortParam
    const sortChoose = req.query.sortChoose
    const limit = req.query.limit
    const offset = req.query.offset
    engineerModel.getEngineer(skill_name, name, sortParam, sortChoose, limit, offset)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  }

}
