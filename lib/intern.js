const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email, "Intern")
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this.title;
    } // Overridden to return 'School'
}

module.exports = Intern;