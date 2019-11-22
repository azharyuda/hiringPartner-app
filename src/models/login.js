const sql = require('../config/db')

module.exports = {
  getUname: (uname) => {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM tbluser WHERE uname = ?', uname, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  saveToken: (token, id) => {
    return new Promise((resolve, reject) => {
      sql.query(`UPDATE tbluser SET token = '${token}', status=1 WHERE id = '${id}'`, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
