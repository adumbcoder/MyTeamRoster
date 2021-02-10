//for the intern subclass
const Employee = require('./employee')

class Intern extends Employee {
    constructor(school) {
        this.school = school;

        super(name, id, email, jobTitle)
    }

    intSchool() {
        return this.school;
    }
}

module.exports = Intern;