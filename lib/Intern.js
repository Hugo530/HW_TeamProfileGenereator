const Employee = require('./Employee.js');

const questions = [
  {
    type: 'input',
    message: 'What is the employee/s name?',
    name: 'name',
  },
  {
    type: 'input',
    messsage: 'What is the employee/s ID?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the employee/s emal?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What school does the intern attend?',
    name: 'school',
  },
];


class Intern extends Employee {
  constructor(name, id, email, school) {
    
    
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern';
  }
}

module.exports = {Intern, questions};
