const sql = require('../config/db')

module.exports = {
  getHire: () => {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM hiringpartner_data', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  postHire: (data) => {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO hiringpartner_data SET ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  putHire: (data, id) => {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE hiringpartner_data SET ? WHERE id = ? ', [data, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },

  deleteHire: (id) => {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM hiringpartner_data WHERE id = ?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }

  // getBySkill: (skill) => {
  //     return new Promise((resolve, reject) => {
  //         sql.query(`SELECT * FROM view_engineer WHERE skill_name LIKE ?`, [`%`+skill+`%`], (err, result) => {
  //             if(err) reject (new Error(err))
  //             resolve(result)
  //         })
  //     })
  // }

}
