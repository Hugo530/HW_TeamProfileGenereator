const Employee = require('./Employee');


// Questions to prompt user with using inquirer
const questions = [
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Mangager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNum",
      },      
];

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager";
    }
    getofficeNum() {
      return this.officeNum
    }
}

// Asks for user input to create a new manager object

module.exports = {Manager, questions};