// Employee function begin, creating const: requesting name, id, email
class Employee {
    constructor(name, id, email, role='') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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

    // Function to get role from user input 'list'
    getRole() {
        return this.role;
    }
};

module.exports = Employee;