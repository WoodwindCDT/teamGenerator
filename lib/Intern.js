const Employee = require("./Employee");

// To extend Intern to use Employee template
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(id, name, email)
        this.school = school;
    }

    // Function to get school from user input
    getSchool() {
        return this.school;
    }

    // Function to set Intern role as 'Intern'
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;