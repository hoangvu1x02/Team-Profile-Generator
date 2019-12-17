//Info required for a Manager
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(Name, Id, Title, OfficeNumber) {
        super(Name, Id, Title);
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