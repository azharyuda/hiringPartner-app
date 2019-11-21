const mysql = require('mysql')
const config = require('./config')
const sql = mysql.createConnection(config.database)
sql.connect((err) => {
  if (err) console.log(err)
  console.log('Database connected')
})

module.exports = sql
