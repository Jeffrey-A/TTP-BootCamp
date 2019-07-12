const { Pool, Client } = require('pg')

let options = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1997mayo27',
  port: 5432,
}
const pool = new Pool(options)

client.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    }
})

pool.query('SELECT * from animals', (err, res) => {
  console.log(res.rows)
  pool.end()
})