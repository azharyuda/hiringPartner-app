const database = require('../config/db')

module.exports = {
  getLogin: (username) => {
    return new Promise((resolve, reject) => {
      database.query(`SELECT * FROM tbluser where uname = '${username}'`, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  patchJwtById: (jwt, id) => {
    return new Promise((resolve, reject) => {
      database.query('UPDATE tbluser set jwt = ? WHERE id = ?', [jwt, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  getJwtDb: (id) => {
    return new Promise((resolve, reject) => {
      database.query('SELECT jwt from tbluser WHERE id = ? LIMIT 1', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
