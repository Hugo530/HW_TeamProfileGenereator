const Employee = require('./Emloyee.js');


const questions = [
  {
    type: 'input',
    message: 'What is the managers name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the Manager/s ID?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the Manager/s email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the Managers office Number?',
    name: 'officeNumber',
  },
];

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    
    
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = {Manager, questions}