const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber;
    }
    getRole(){
        return this.title;
    } // Overridden to return 'Manager'
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;