const Employee = require('./Employee'); //require this so that it would be the same common class

//This is a subclass- branching from Employee
class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(id,name,email); //this will get-name id email 
        this.gitHub = gitHub; //the only addition to this class is gitHub 
    }
    getGitHub() {
        console.log(`GitHub: ${this.gitHub}`);
        return this.gitHub;
    }
    getRole(){return 'Engineer'}//return string that includes the name 
}
console.log('--Engineer--')//checking this as a branch visiable by console

Engineer.getGitHub(); //calling on the methods
Engineer.getrole(); //calling on the methods 

module.exports = Engineer; //making this exportable- helpful when it comes down to file and test generation
