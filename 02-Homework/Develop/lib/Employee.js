// Employee class which contains basic info of a employee excludes their specific role details

const shortid = require('shortid');
class Employee {
    constructor(Name, Email) {
        this.Name = Name;
        this.Id =  shortid.generate();
        this.Email = Email;
    }

    getName() {
        return this.Name;
    }
    getId() {
        return this.Id;
    }
    getEmail() {
        return this.Email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
