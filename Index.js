// Global Requirements/Dependencies
const inquirer = require("inquirer");
const fs = require('fs');

// Required Constructors
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// To generate Page template
const generatePage = require('./src/html-template');
const { writeFile, copyFile } = require('./file-generate');
const { royalblue } = require("color-name");

// Bonus Validation
//const validation = {
   // email: input => input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi) ? true : "Please enter a valid email address."
//}

// This array fills in with employee data.
const teamMembers = [];

console.log("Welcome! Here you will enter your Team members information and receive a generated HTML page. Let's begin!");

function buildTeam() {
    role = 'Manager';
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your Manager's Name"
        },
        {
            type: "number",
            name: "id",
            message: "What is your Manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Manager's email?"
        },
        {
            type: "number",
            name: "officeNumber",
            message: "What is your Manager's Office Number?"
        },
    ]).then((answers) => {
        teamMembers.push(
            new Manager(answers.name, answers.id, answers.email, answers.officeNumber, answers.role)
        );
        promptForEmployee();
    });
};

function promptForEmployee() {
    inquirer.prompt([
        {
            name: "employee",
            type: "list",
            message: "Would you like to add an Employee or Generate HTML?",
            choices: [
                "Add Intern",
                "Add Engineer",
                "Generate HTML"
            ]
        }
    ]).then(employeeData => {
        if (employeeData.employee === "Add Intern") {
            buildIntern();
        } else if (employeeData.employee === "Add Engineer") {
            buildEngineer();
        } else {
            console.log(`
 =====================
 Building HTML Page...
 =====================
 `)
    let Template = generatePage(teamMembers);
        writeFile(Template)
            .then((writeFileResponse) => {
                console.log(writeFileResponse);
                return copyFile();
            })
            .then((copyFileResponse) => {
                console.log(copyFileResponse);
            });
        };
    });
};

function buildIntern() {
    role = 'Intern';
    console.log(`
 =========================
 Intern Addition Initiated
 =========================
`);
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        },
    ]).then((answers) => {
        teamMembers.push(
            new Intern(answers.name, answers.id, answers.email, answers.school, answers.role)
        );
        promptForEmployee();
    });
};

function buildEngineer() {
    role = 'Engineer';
    console.log(`
 ===========================
 Engineer Addition Initiated
 ===========================
  `);
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your engineer's GitHub username?"
        },
    ]).then((answers) => {
        teamMembers.push(
            new Engineer(answers.name, answers.id, answers.email, answers.gitHub, answers.role)
        );
        promptForEmployee();
    });
};

buildTeam();