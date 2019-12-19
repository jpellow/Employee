const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
var inquirer = require("inquirer");
var fs = require("fs");

// var employee = new Promise(function (resolve, reject) {
//     resolve(inquirer.prompt([
//         {
//             type: "list",
//             name: "title",
//             message: "Please select the employee's title",
//             choices: [
//                 "Manager",
//                 "Engineer",
//                 "Intern"
//             ]
//         }
//     ]))
// });

// manager.then(function (data) {
//     var name = data.name;
//     var id = data.id;
//     var email = data.email;
//     var office = data.office;
//     const manager = new Manager(name, id, email, office);
//     if (data.more === "yes") {
//         addEmployee();
//     }

// })
addEmployee();
function addEmployee() {
    var employee = new Promise(function (resolve, reject) {
        resolve(inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please select the employee's name"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the employees's ID"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the employees's email address"
            },
            {
                type: "list",
                name: "title",
                message: "Please enter the employees's title",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }
        ]))
    });
    employee.then(function (data) {
        var name = data.name;
        var id = data.id;
        var email = data.email;
        var title = data.title;
        if (data.title === "Manager") {
            var unique = new Promise(function (resolve, reject) {
                resolve(inquirer.prompt([
                    {
                        type: "input",
                        name: "unique",
                        message: "Please enter the Manager's office number"
                    },
                ]))
            });
            unique.then(function(data){
                var unique = data.unique
                const manager = new Intern(name, id, email, unique)
                console.log(manager);

            })

        }
        else if (data.title === "Engineer") {
            var unique = new Promise(function (resolve, reject) {
                resolve(inquirer.prompt([
                    {
                        type: "input",
                        name: "unique",
                        message: "Please enter the Engineers's Github"
                    },
                ]))
            });
            unique.then(function(data){
                var unique = data.unique
                const engineer = new Intern(name, id, email, unique)
                console.log(engineer);
            })

        }
        else if (data.title === "Intern") {
            var unique = new Promise(function (resolve, reject) {
                resolve(inquirer.prompt([
                    {
                        type: "input",
                        name: "unique",
                        message: "Please enter the Intern's school"
                    },
                ]))
            });
            unique.then(function(data){
                var unique = data.unique
                const intern = new Intern(name, id, email, unique)
                console.log(intern);
            })
    
        }
    })
}