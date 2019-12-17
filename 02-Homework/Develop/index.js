const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const ejs = require('ejs');


const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



const TeamArray = [];

async function TeamFormation() {
    try {
        const ManagerAnswers = await inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Your role is',
                choices: [
                    "Manager"
                ]
            },
            {
                type: 'input',
                name: 'name',
                message: 'Please enter your name',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email',
            },
            {
                type: 'input',
                name: 'OfficeNumber',
                message: 'Please enter your office number',
            },
        ]);

        const {
            role,
            name,
            email,
            OfficeNumber
        } = ManagerAnswers;

        const manager = new Manager(name, email, OfficeNumber);


        TeamArray.push(manager);

        const { teamSize } = await inquirer.prompt([{
            type: 'input',
            name: 'teamSize',
            message: 'How many member do you need?',
            default: 2,
        }]);

        for (let i = 0; i < teamSize; i++) {
            console.log('=============================')
            const response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter your team member name',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Pleaseenter your team member email',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please enter your team member role',
                    choices: [
                        'Intern',
                        'Engineer'
                    ]
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please enter your team member github',
                    when: ({ role }) => role === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Please enter your team member school',
                    when: ({ role }) => role === 'Intern'
                },
            ]);

            const {
                name,
                email,
                role,
                github,
                school,
            } = response;

            switch (role) {
                case 'Engineer':
                    const engineer = new Engineer(name, email, github);
                    TeamArray.push(engineer);
                    break;
                case 'Intern':
                    const Intern = new Engineer(name, email, school);
                    TeamArray.push(Intern);
                    break;
            }
        }
        console.log(TeamArray);
    }
    catch (err) {
        console.log(err)
    }
}

TeamFormation();
