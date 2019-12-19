const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email, "Engineer")
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.title;
    } // Overridden to return 'Engineer'
}

module.exports = Engineer;