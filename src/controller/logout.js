const logoutModel = require('../models/logout')
const { response } = require('../helpers/helper')
const jwt = require('jsonwebtoken')

module.exports = {
  deleteToken: async (req, res) => {
    const tokenHeader = req.headers.Authorization
    const id = req.body.id
    // const result = await logoutModel.deleteToken(id)
    console.log(id.id)
    logoutModel.deleteToken(id)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
