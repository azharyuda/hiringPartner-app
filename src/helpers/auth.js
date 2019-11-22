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
        if (dbjwt === null) {
          return 'Your token empty, pls REGISTER!'
        } else {
          if (dbjwt === jwtheader) {
            const payload = {
              id: passData[0].id,
              uuid: uuid()
            }
            const token = jwt.sign(payload, process.env.KEYS, { expiresIn: '24h' })
            loginModel.patchJwtById(token, payload.id)
            return token
          } else {
            return 'Your token isnt autorized'
          }
        }
      } else {
        return 'Wrong Pass'
      }
    } else {
      return 'Wrong Username'
    }
  },

  verifyToken: async (req, res, next) => {
    const token = req.headers.jewete
    const decode = jwt.decode(token, { complete: true })
    
    // console.log(userId)
    // return res.send(userId.toString())

    if(!token) {
      return res.status(200).send("login dulu")
    }

    // try {
    //   const tokenDb = await loginModel.getJwtDB(userId)
    //   // console.log(tokenDb)
    //   const tokenCheck = tokenDb[0].jwt
    //   console.log(tokenCheck)
    //   if(!tokenDb && !token) {
    //     return res.send("token tidka sama")
    //   }

      
        jwt.verify(token, process.env.KEYS, (err, decode) => {
          if (token === 0) {
            return res.status(400).send('Token doesnt exist')
          }
          else {
            next()
          }
        })
      
    //   else {
    //     return res.status(400).send('Please Login to Continue your step')
    //   }

    // } catch (error) {
    //   return res.status(400).send("login dulu lah")
    // }
  }
}