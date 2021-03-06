const connection = require('./connection');

class DB {
  constructor(connection){
    this.connection = connection;
  }

  findAllDepartments () {
    return this.connection.promise().query('SELECT id, name FROM departments;')
  }

  findByDepartmentId (id) {
    return this.connection.promise().query('SELECT id, name FROM departments WHERE id = ?;', id);
  }

  findAllRoles () {
    return this.connection.promise().query('SELECT id, title, salary, department_id from role;')
  }
}


module.exports = new DB(connection);
