const userModel = require('../models/user')
const bycrypt = require('bcryptjs')
const { response } = require('../helpers/helper')

module.exports = {
  getUser: (req, res) => {
    userModel.getUser()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addUser: (req, res) => {
    const salt = bycrypt.genSaltSync(10)
    bycrypt.hash(req.body.passw, salt, (err, hash) => {
      const { uname, email, status } = req.body

      const data = {
        uname,
        passw: hash,
        email,
        status: 0,
        created_at: new Date(),
        updated_at: new Date()
      }

      userModel.addUser(data)
        .then(result => {
          response(res, 200, 'Register success!')
        })
        .catch(err => {
          console.log(err)
        })
    })
  },

  updateUser: (req, res) => {
    const id = req.params.id
    const salt = bycrypt.genSaltSync(10)
    bycrypt.hash(req.body.passw, salt, (err, hash) => {
      const { uname, email, status } = req.body

      const data = {
        uname,
        passw: hash,
        email,
        status: 0,
        created_at: new Date(),
        updated_at: new Date()
      }

      userModel.updateUser(data, id)
        .then(result => {
          response(res, 200, 'Data is successfully updated')
        })
        .catch(err => {
          console.log(err)
        })
    })
  },

  deleteUser: (req, res) => {
    const id = req.params.id

    userModel.deleteUser(id)
      .then(result => {
        response(res, 200, 'Data is successfully deleted')
      })
      .catch(err => {
        console.log(err)
      })
  },
  login: (req, res) => {
    const uname = req.params.uname
  }

}
