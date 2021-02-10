//for the developer subclass
const Employee = require('./employee')

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        
        super(name, id, email, jobTitle)
    }

    engGitHub() {
        return this.github;
    }
}

module.exports = Engineer;