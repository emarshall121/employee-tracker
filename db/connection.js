// connection to mysql
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'emily',
  password: '123456',
  database: 'employees'
});

connection.connect(function(err) {
  if (err) throw err;
})

module.exports = connection;