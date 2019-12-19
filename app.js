const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
var inquirer = require("inquirer");
var fs = require("fs");

var employee = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "list",
            name: "title",
            message: "Please select the employee's title",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "list",
            name: "name",
            when: function(answers){
                if (answers.employee === "Manager"){
                    var manager = new Promise(function (resolve, reject) {
                        resolve(inquirer.prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "Please select the Manager's name"
                    
                            }
                        ]))
                    });
                    
                }
            }
        },

        {
            type: "input",
            name: "name",
            message: "Please select the employee's title"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email address"
        },
        {
            type: "input",
            name: "office",
            message: "Please enter the manager's office number"
        },
    ]))
});

manager.then(function(data){
    var name = data.name;
    var id = data.id;
    var email = data.email;
    var office = data.office;
    const manager = new Manager(name, id, email, office);
    if (data.more === "yes"){
        addEmployee();
    }
    
})

function addEmployee(){
    var employee = new Promise(function (resolve, reject) {
        resolve(inquirer.prompt([
        ]))
    });
}