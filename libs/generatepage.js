//This page will generate the html for the team roster page.

const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')
const Employee = require('./employee')

 function mainHtml() {
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>My Team</title>
    </head>
    <body>
        <div class='container'>
            <div class='row'>
                <h1>My Team</h1>
            </div>
            <div class='row myTeam'>
                
            </div>

        </div>
        
    </body>
    `
 };

function rendManager() {
    `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${Employee.name}</h5>
            <ul>
                <li>Office Number: ${Manager.officeNumber}</li>
                <li>Id: ${Employee.id}</li>
                <li>Email: ${Employee.email}</li>
            </ul>
        </div>
    </div>
    `
}

function rendEngineer() {
    `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${Employee.name}</h5>
            <ul>
                <li>GitHub: ${Engineer.github}</li>
                <li>Id: ${Employee.id}</li>
                <li>Email: ${Employee.email}</li>
            </ul>
        </div>
    </div>
    `
}

function rendIntern() {
    `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${Employee.name}</h5>
            <ul>
                <li>School: ${Intern.school}</li>
                <li>Id: ${Employee.id}</li>
                <li>Email: ${Employee.email}</li>
            </ul>
        </div>
    </div>
    `
}

