const sql = require('../config/db.js')

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM view_engineer', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  addEngineer: (data) => {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO engineer_data SET ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  putEngineer: (data, id) => {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE engineer_data SET ? WHERE id = ?', [data, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  deleteEngineer: (id) => {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM engineer_data WHERE id = ?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  getEngineer: (skill_name, name, sortParam, sortChoose, limit, offset) => {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM view_engineer WHERE skill_name LIKE '%${skill_name}%' OR name LIKE '%${name}%' ORDER BY ${sortParam} ${sortChoose} LIMIT ${limit} OFFSET ${offset} `, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
