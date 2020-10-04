const Employee = require("./Employee");

// To extend Engineer to use Employee template
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, role);
        this.github = github;
    }

    // Function to get Github Account entered from user input
    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;