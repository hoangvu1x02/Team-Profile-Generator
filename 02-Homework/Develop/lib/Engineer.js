//Info required for a engineer team member
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(Name, Id, Title, GitHUB){
        super(Name, Id, Title);
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