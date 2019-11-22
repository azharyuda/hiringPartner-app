const modelsLogin = require('../models/login')
const validate = require('../helpers/auth')
module.exports = {
  getLogin: async (req, res) => {
    const data = {
      uname: req.body.uname,
      passw: req.body.uname
    }
    try {
      const passData = await modelsLogin.getLogin(data.uname)
      const result = validate.validateLogin(req, data, passData)
      res.send(result)
    } catch (err) {
      console.log(err)
    }
  }
}