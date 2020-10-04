const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }

    // Function to return office number from user input
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;