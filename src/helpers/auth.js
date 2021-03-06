require('dotenv/config')
const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const loginModel = require('../models/login')

module.exports = {
  validateLogin: (req, reqData, passData) => {
    if (passData.length != 0) {
      const reqPass = reqData.passw
      const sqlPass = passData[0].passw
      const dbjwt = passData[0].jwt
      const jwtheader = req.headers.jwt
      if (bcrypt.compareSync(reqPass, sqlPass)) {
            const payload = {
              id: passData[0].id,
              uuid: uuid()
            }
            const token = jwt.sign(payload, process.env.KEYS, { expiresIn: '24h' })
            loginModel.patchJwtById(token, payload.id)
            return token
        
      } else {
        return 'Wrong Pass'
      }
    } else {
      return 'Wrong Username'
    }
  },

  verifyToken: async (req, res, next) => {
    const token = req.headers.jewete
    const decode = jwt.decode(token)

    if (!token) {
      return res.status(200).send('Please login first before accessing this page')
    }
    const userjwt =await loginModel.getJwtDb(decode.id)
    if(!userjwt){
      return res.status(401).send('Token is not authorized')
    }
    const jwtdata = userjwt[0].jwt
    if(token !== jwtdata){
      return res.status(401).send('token is not available')
    }
    jwt.verify(token, process.env.KEYS, (err, decode) => {
      if (token === 0) {
        return res.status(400).send('Token doesnt exist')
      } else {
        next()
      }
    })
  }
}
