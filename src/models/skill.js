const sql = require('../config/db')

module.exports = {
  getSkill: () => {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM skill', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  postSkill: (data) => {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO skill SET ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  putSkill: (data, skill_id) => {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE skill SET ? WHERE id = ?', [data, skill_id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  deleteSkill: (skill_id) => {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM skill WHERE id = ?', skill_id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  postDetailSkill: (data2) => {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO skill_detail SET ?', data2, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
  // putDetailSkill: (data2, id_eng, id_skill) => {
  //     return new Promise ((resolve, reject) => {
  //         sql.query('UPDATE skill_detail SET skill_level = ? WHERE engineer_id = ? AND skill_id = ?', [data2, id_eng, id_skill], (err, result) => {
  //             if(err) reject (new Error(err))
  //             resolve(result)
  //         })
  //     })
  // }

}
