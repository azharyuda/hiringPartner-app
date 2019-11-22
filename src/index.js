const express = require('express')
const Route = express.Router()

const engineer = require('./routes/engineer')
const hirepart = require('./routes/hirepart')
const user = require('./routes/user')
const skill = require('./routes/skill')
const login = require('./routes/login')
const logout = require('./routes/logout')
const { verifyToken } = require('./helpers/auth')

Route
  .use('/engineer', verifyToken, engineer)
  .use('/hirepart', verifyToken, hirepart)
  .use('/user',  user)
  .use('/skill', verifyToken, skill)
  .use('/login', login)
  .use('/logout', verifyToken, logout)

module.exports = Route
