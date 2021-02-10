
const manager = require('./libs/manager')
const engineer = require('./libs/engineer');
const intern = require('./libs/intern');
const html = require('generatepage');
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const { default: generate } = require('@babel/generator');
const Intern = require('./libs/intern');
//variables to store Array and id for each member created
let memberId = 0;
let myTeam = [];

function employeeQuestions(responses){
    return inquirer.prompt([
    {
        type:'list',
        name:'jobTitle',
        message:'What is your job title?',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    },
]).then(function(res){
    if(res.jobTitle === 'Manager') {
        inquirer.prompt([
            {
                type:'input',
                name:'name',
                message:'What is your name?'
            },
            {
                type:'input',
                name:'id',
                message:'What is your employee id?'
            },
            {
                type:'input',
                name:'email',
                message:'What is your email?'
            },
            {
                type:'input',
                name:'officeNumber',
                message:'What is your office number?'
            }
        ]).then(function (managerRes){
            //new instance
            const newManager = new Manager(managerRes.name, managerRes.id, managerRes.email, managerRes.officeNumber, memberId);
            //increase the member id so they have a unique Id
            memberId++;
            //push the member created into the array
            myTeam.push(newManager);
            //ask the user if they want to continue
            gameOver();

        })
        
    } else if(res.jobTitle === 'Engineer') {
        inquirer.prompt([
            {
                type:'input',
                name:'name',
                message:'What is your name?'
            },
            {
                type:'input',
                name:'id',
                message:'What is your employee id?'
            },
            {
                type:'input',
                name:'email',
                message:'What is your email?'
            },
            {
                type:'input',
                name:'github',
                message:'What is your GitHub username?'
            }
        ]).then(function(engineerRes){
            const newEngineer = new Engineer(engineerRes.name, engineerRes.id, engineerRes.email, engineerRes.github, memberId);
            //increase the member id so they have a unique Id
            memberId++;
            //push the member created into the array
            myTeam.push(newEngineer);
            //ask the user if they want to continue
            gameOver()
        })
    } else {
        inquirer.prompt([
            {
                type:'input',
                name:'name',
                message:'What is your name?'
            },
            {
                type:'input',
                name:'id',
                message:'What is your employee id?'
            },
            {
                type:'input',
                name:'email',
                message:'What is your email?'
            },
            {
                type:'input',
                name:'school',
                message:'What school do/did you attend?'
            }
        ]).then(function(internRes){
            const newIntern = new Intern(internRes.name, internRes.id, internRes.email, internRes.school, memberId);
            //increase the member id so they have a unique Id
            memberId++;
            //push the member created into the array
            myTeam.push(newIntern);
            //ask the user if they want to continue
            gameOver()
        })
    }
})
//catch function for errors
    .catch(function(error){
        console.log(error)
    })

}; 





//function to continue adding new members or to stop and generate the member roster
function gameOver(){
    inquirer.prompt([
        {
            type:'confirm',
            name:'gameOver',
            message:'Do you want to continue adding members?'
        }
    ]).then(function(confirm){
        confirm.continue ? employeeQuestions() : generate()
    })
}





//call the function
employeeQuestions();