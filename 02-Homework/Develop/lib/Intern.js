//Info required for a intern
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(Name, Id, Title, School) {
        super(Name, Id, Title,);
        this.School = School;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    
}
module.exports = Intern;