class Employee {
    constructor(name, id, email, jobTitle) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.jobTitle = jobTitle;
        
    }

    //return the name
    empName(){
        return this.name;
    };

    empId(){
        return this.id;
    };

    empEmail(){
        return this.email;
    };

    empTitle() {
        return this.jobTitle;
    };

}

module.exports = Employee;