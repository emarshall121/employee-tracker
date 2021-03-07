const { prompt } = require('inquirer');

const db = require('./db');

function begin() {
  prompt([
    {
      type: 'list',
      name: 'queryType',
      message: 'What would you like to select?',
      choices: [
        {
          name: 'Select All Departments',
          value: 'ALL_DEPT'
        },
        {
          name: 'Select All Roles',
          value: 'ALL_ROLES'
        },
        {
          name: 'Select All Employees',
          value: 'ALL_EMP'
        },
        {
          name: 'Select by Department Name',
          value: 'BY_ID'
        },
        {
          name: 'Add A Department',
          value: 'ADD_DEPT'
        },
        {
          name: 'Add A Role',
          value: 'ADD_ROLE'
        },
        {
          name: 'Add An Employee',
          value: 'ADD_EMP'
        },
        {
          name: 'Update Employee Role',
          value: 'UPDATE_ROLE'
        },
        {
          name: 'Done',
          value: 'END'
        }
      ]
    }
  ])
  .then (({queryType}) => {
    switch (queryType) {
      case 'ALL_DEPT':
        selectAllDept();
        break;
      case 'BY_ID':
        selectOne();
        break;
      case 'ALL_ROLES':
        selectAllRoles();
        break;
      case 'ALL_EMP':
        selectAllEmployees();
        break;      
      case 'ADD_DEPT':
        addDept();
        break;
      case 'ADD_ROLE':
        addRole();
        break;
      case 'ADD_EMP':
        addEmployee();
        break;
      case 'UPDATE_ROLE':
        updateRole();
        break;
      default:
        db.connection.end()
        break;
    }
  })
}

function selectAllDept() {
  db.findAllDepartments()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function selectAllRoles() {
  db.findAllRoles()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function selectAllEmployees() {
  db.findAllEmployees()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function addDept() {
  prompt(
    {
      type: "input",
      message: "What is the name of the department?",
      name: "deptName"
    }
  )
  .then(function(answer){
    db.addDepartment(answer.deptName)
    .then(([answer])=>{
      console.log(answer);
      begin();
    })
  })
}

function addRole() {
  prompt([
    {
      type: "input",
      message: "What is the role you would like to add?",
      name: "roleName"
    },
    {
      type: 'input',
      message: 'What is the salary of this role?',
      name: 'newSalary'
    },
    {
      type: 'input',
      message: 'What department does this role below to?',
      name: 'newRoleDept',
      // choices: departments.map(d => ({value: d.id, name: d.name}))
    }
  ])
  .then(function(answer){
    db.addRole(answer.roleName, answer.newSalary, answer.newRoleDept)
    .then(([answer])=>{
      console.table(answer);
      begin();
    })
  })
}

function addEmployee() {
  prompt([
    {
      type: "input",
      message: "What is the first name of your new employee?",
      name: "empFirstName"
    },
    {
      type: 'input',
      message: 'What is the last name of your new employee?',
      name: 'empLastName'
    },
    {
      type: 'input',
      message: 'What is the role of this employee?',
      name: 'empRole',
      // choices: departments.map(d => ({value: d.id, name: d.name}))
    },
    {
      type: 'input',
      message: 'Who is their manager?',
      name: 'empManager',
      // choices: departments.map(d => ({value: d.id, name: d.name}))
    }
  ])
  .then(function(answer){
    db.addEmployee(answer.empFirstName, answer.empLastName, answer.empRole, answer.empManager)
    .then(([answer])=>{
      console.table(answer);
      begin();
    })
  })
}

function selectAllDept() {
  db.findAllDepartments()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function updateRole() {
  db.addRoles()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function selectOne () {
  db.findAllDepartments()
  .then(([departments]) => {
    console.log(departments.id)
  prompt ([
    {
      type: 'list',
      name: 'id',
      message: 'What is the department Name?',
      choices: departments.map(d => ({value: d.id, name: d.name}))
    }
  ])
  .then(({id}) => {
    db.findByDepartmentId(parseInt(id))
    .then(([data]) => {
      console.log(data);
      begin();
    })
  })
})
}

begin();