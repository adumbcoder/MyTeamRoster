//this will host misc scripts for the team roster page

const fs = require('fs');
const inquirer = require('inquirer');
const html = require('generatepage');







//function to write the html
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            throw err;
        }
    })
}

//function to start the app
function init() {
    prompt(employeeQuestions).then(response => {
        const answers = html(response);

        writeToFile('index.html', answers)
    })
}

//call the function
init();