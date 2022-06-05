const Employee = require('./Employee.js');

const questions = [
  {
    type: 'input',
    message: "What is the Intern's name?",
    name: 'name',
  },
  {
    type: 'input',
    messsage: "What is the Intern's id?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is the Intern's Email?",
    name: 'email',
  },
  {
    type: 'input',
    message: 'What school does the Intern attend?',
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
