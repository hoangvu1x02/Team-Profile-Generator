//Info required for a Manager
const Employee = require('./Employee');


class Manager extends Employee {
    constructor(Name, Email, OfficeNumber) {
        super(Name, Email);
        this.OfficeNumber = OfficeNumber;
    }
    getOfficeNumber() {
        return this.OfficeNumber;
    }
    getRole() {
        return "Manager";
    }    
}

module.exports = Manager;