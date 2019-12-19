class Employee{
    constructor(name, id, email,title){
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        if (this.title === undefined){
            this.title = "Employee"
        }
        return this.title;
    } // Returns 'Employee'
}

// const e = new Employee("foo", 1, "title", "fbdofub@djsfbosdbf.com");
// e.getRole("Employee");
// console.log(e);

module.exports = Employee;