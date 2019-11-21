require('dotenv/config')
const uuid = require('uuid/v4')
const jwt = require('jsonwebtoken')
const sql = require('../config/db')
const { response } = require('../helpers/helper')
const bcrypt = require('bcryptjs')
const loginModel = require('../models/login')

module.exports = {
  validateLogin: (reqData, passwData) => {
    if (passwData.length != 0) {
      const reqPass = reqData.passw
      const sqlPass = passwData[0].passw

      if (bcrypt.compareSync(reqPass, sqlPass)) {
        const payload = {
          passw: reqPass,
          uuid: uuid()
        }
        const load = uuid()
        const token = jwt.sign({ load }, process.env.KEYS, { expiresIn: '10m' })
        loginModel.saveToken(token, passwData[0].id)
        console.log(passwData[0].id)
        return {
          message: 'Berhasil login',
          token: token
        }
      } else {
        return {
          status: 401,
          message: 'wrong password'
        }
      }
    } else {
      return {
        status: 401,
        message: 'wrong username'
      }
    }
  },
  verifyToken: (req, res, next) => {
    const token = req.headers.checktoken
    if (!token) {
      return res.status(401).send('Token tidak ada')
    }
    try {
      jwt.verify(token, process.env.KEYS, (err) => {
        if (err) {
          return res.status(401).send(err.name)
        } else {
          next()
        }
      })
    } catch (error) {
      return res.status(401).send('lost connection' + token)
    }
  }
}
