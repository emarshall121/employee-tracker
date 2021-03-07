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
    return this.connection.promise().query(
      `SELECT  title as job_title, role.id as role_id, departments.name as department, salary
      FROM role
      LEFT JOIN departments on role.department_id = departments.id ;`
      )
  }

  findAllEmployees () {
    return this.connection.promise().query(
      `SELECT employee.id as employee_id, employee.first_name, employee.last_name, role.title as job_title, departments.name AS department, role.salary, CONCAT(e.first_name, " ", e.last_name) AS manager 
      FROM employee 
      INNER JOIN role on (employee.role_id = role.id)
      INNER JOIN departments on role.department_id=departments.id
      LEFT JOIN employee as e on employee.manager_id = e.id`
    )
  }

  addDepartment(string) {
    return this.connection.promise().query (
      'INSERT INTO departments SET ?',
      {
        name: string
      }
    );
  };

  addRole(string, integer) {
    return this.connection.promise().query (
      `INSERT INTO role SET ?
      SELECT d.name 
      FROM departments
      LEFT JOIN departments ON role.department_id=d.id`,
      {
          title: string,
          salary: integer,
          name: string
        },
    );
  };

  addEmployee(string) {
    return this.connection.promise().query (
      `INSERT INTO employee SET ?
      SELECT role.title 
      FROM role
      LEFT JOIN role ON role.id = employee.role_id`,
      {
        first_name: string,
        last_name: string,
        role: string,
        manager: string
      }
    );
  };

  updateEmployeeRole(){

  }
}




module.exports = new DB(connection);
