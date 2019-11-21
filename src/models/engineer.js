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
  getEngineer: (skill_name, name) => {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM view_engineer WHERE skill_name LIKE '%${skill_name}%' OR name LIKE '%${name}%' `, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  sort: (param, sortChoose) => {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM view_engineer ORDER BY ${param} ${sortChoose}`, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  engineerPage: (limit, offset) => {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * from view_engineer LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
