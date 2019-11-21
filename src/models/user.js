const sql = require('../config/db')

module.exports = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM tbluser', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  addUser: (data) => {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO tbluser SET ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  updateUser: (data, id) => {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE tbluser SET ? WHERE id = ?', [data, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM tbluser WHERE id=?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
