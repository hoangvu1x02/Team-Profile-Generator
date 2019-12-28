//Info required for a intern
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(Name, Email, School) {
        super(Name, Email,);
        this.School = School;
    }
    getSchool() {
        return this.School;
    }
    getRole() {
        return "Intern";
    }
    
}
module.exports = Intern;