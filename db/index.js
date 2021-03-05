const connection = require('./connection');

class DB {
  constructor(connection){
    this.connection = connection;
  }

  findAllDepartments () {
    return this.connection.promise().query('SELECT id, name FROM departments;')
  }

  findAllId (id) {
    return this.connection.promise().query('SELECT id, name FROM departments WHERE id = ?;', id);
  }
}


module.exports = new DB(connection);
