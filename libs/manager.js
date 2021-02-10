//for the manager subclass
const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    
        super(name, id, email, jobTitle)
    
    }

    manOffNum(){
        return this.officeNumber
    }
}

module.exports = Manager;