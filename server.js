const { prompt } = require('inquirer');

const db = require('./db');

// db.findAllDepartments()
// .then(departments => {
//   console.log(departments);
// });

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
          name: 'Add A Departments',
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
        findAllEmployees();
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

function selectAllEmployess() {
  db.findAllEmployees()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function addDept() {
  db.addDepartments()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function addRole() {
  db.addRoles()
  .then(([data]) => {
    console.log(data)
    begin();
  })
}

function addEmployee() {
  db.addEmployee()
  .then(([data]) => {
    console.log(data)
    begin();
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
  // })
  // prompt([
  //   {
  //     type: 'input',
  //     name: 'id',
  //     message: 'What is the department id?',
  //   }
  // ])
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