const hireModel = require('../models/hirepart')
const { response } = require('../helpers/helper')

module.exports = {
  getHire: (req, res) => {
    hireModel.getHire()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  postHire: (req, res) => {
    const { name, logo, location, description } = req.body
    const data = {
      name,
      logo,
      location,
      description
    }
    hireModel.postHire(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  putHire: (req, res) => {
    const id = req.params.id
    const { name, logo, location, description } = req.body
    const data = {
      name,
      logo,
      location,
      description
    }
    hireModel.putHire(data, id)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  deleteHire: (req, res) => {
    const id = req.params.id
    hireModel.deleteHire(id)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  getByName: (req, res) => {
    const name = req.params.name
    hireModel.getByName(name)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // getBySkill: (req, res) => {
  //     const skill = req.params.skill
  //     hireModel.getBySkill(skill)
  //         .then(result => {
  //             response(res, 200, result)
  //         })
  //         .catch(err => {
  //             console.log(err)
  //         })
  // }
}
