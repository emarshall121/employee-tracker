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
          name: 'Select All',
          value: 'ALL'
        },
        {
          name: 'Select by ID',
          value: 'BY_ID'
        },
        {
          name: 'Stop',
          value: 'END'
        }
      ]
    }
  ])
  .then (({queryType}) => {
    switch (queryType) {
      case 'ALL':
        selectAll();
        break;
      case 'BY_ID':
        selectOne();
        break;
      default:
        db.connection.end()
        break;
    }
  })
}

function selectAll() {
  db.findAllDepartments()
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
      message: 'What is the department ID?',
      choices: departments.map(departments => departments.id)
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