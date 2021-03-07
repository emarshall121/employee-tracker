const connection = require('./connection');

class DB {
  constructor(connection){
    this.connection = connection;
  }

  findAllDepartments () {
    return this.connection.promise().query('SELECT id as Department_ID, name as Department_Name FROM departments;')
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

  addRole(string, integer, deptId) {
    return this.connection.promise().query (
      `INSERT INTO role SET ?`,
      {
          title: string,
          salary: integer,
          department_id: deptId
        },
    );
  };

  addEmployee(first, last, roleId, integer) {
    return this.connection.promise().query (
      `INSERT INTO employee SET ?`,
      {
        first_name: first,
        last_name: last,
        role_id: roleId,
        manager_id: integer
      }
    );
  };

  updateEmployeeRole(){

  };
}




module.exports = new DB(connection);
