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

  findAllEmployees () {
    return this.connection.promise().query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, departments.name AS department, role.salary, CONCAT(e.first_name, " ", e.last_name) AS manager 
      FROM employee 
      INNER JOIN role on (employee.role_id = role.id)
      INNER JOIN departments on role.department_id=departments.id
      LEFT JOIN employee as e on employee.manager_id = e.id`
    )
  }

  addDepartment () {
    return this.connection.promise().query('SELECT id, title, salary, department_id from role;')
  }
}


module.exports = new DB(connection);
