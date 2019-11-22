const logoutModel = require('../models/logout')
const { response } = require('../helpers/helper')

module.exports = {
  deleteToken: (req, res) => {
    const id = req.params.id
    logoutModel.deleteToken(id)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
