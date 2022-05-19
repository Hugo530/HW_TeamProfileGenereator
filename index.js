const inquirer = requirer('inquirer');
const path = requirer('path');
const fs = requirer('fs');
const Employee = requirer('employees.js')

const teamMembers = [];

function createTeam() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "what is the team's manager's name?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'please enter at least one character.'
                },
            },
            {
                type: 'input',
                name: 'managerId',
                message: "what is the team's manager's employee Id number?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return 'please enter a positive number greater than zero'
                },
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "what is the team's manager's email?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return 'please enter a positive number greater than zero'
                },
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "what is the team's manager's Office telephone number?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return 'please enter a positive number greater than zero'
                },
            }
        ])
    }
}