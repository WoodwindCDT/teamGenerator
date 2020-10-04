const Employee = require("./Employee");

// To extend Intern to use Employee template
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, role)
        this.school = school;
    }

    // Function to get school from user input
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;