const sql = require('../config/db')

module.exports = {
  deleteToken: (id) => {
    return new Promise((resolve, reject) => {
      sql.query(`UPDATE tbluser SET jwt = NULL , status=0 WHERE id = '${id}'`, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
