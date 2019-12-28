//Info required for a engineer team member
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(Name, Email, GitHUB){
        super(Name, Email);
        this.GitHUB = GitHUB;
    }
    getGitHUB(){
        return this.GitHUB;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;