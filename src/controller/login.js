const loginModel = require('../models/login')
const { response } = require('../helpers/helper')
const valid = require('../helpers/auth')

module.exports = {
  getUname: async (req, res) => {
    const data = {
      uname: req.body.uname,
      passw: req.body.passw
    }
    try {
      const passwData = await loginModel.getUname(data.uname)
      const result = valid.validateLogin(data, passwData)

      res.send(result)
    } catch (err) {
      console.log(err)
    }
  }
}
