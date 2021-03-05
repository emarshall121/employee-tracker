const { prompt } = require('inquirer');

const db = require('./db');

db.findAllDepartments()
.then(departments => {
  console.log(departments);
});