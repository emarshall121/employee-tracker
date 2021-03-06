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