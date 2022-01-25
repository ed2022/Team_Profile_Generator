const Employee = require('./Employee'); //require this so that it would be the same common class

//This is a subclass- branching from Employee
class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(name, id, email);  //this will get-name id email 
        this.gitHub = gitHub; //the only addition to this class is gitHub 
    }
    getHub() {return this.gitHub;} // console.log(`GitHub: ${this.gitHub}`);
    getRole(){return 'Engineer';}//return string that includes the name 
}
//console.log('--Engineer--')//checking this as a branch visiable by console
module.exports = Engineer; //making this exportable- helpful when it comes down to file and test generation
