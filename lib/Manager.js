const { off } = require("process");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Function to return office number from user input
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Function to create Manager role as 'Manager'
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;