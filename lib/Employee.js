// Employee function begin, creating const: requesting name, id, email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Function to get Name from user input
    getName() {
        return this.name;
    }

    // Function to get ID from user input
    getId() {
        return this.id;
    }

    // Function to get Email from user input
    getEmail() {
        return this.email;
    }
};

module.exports = Employee;