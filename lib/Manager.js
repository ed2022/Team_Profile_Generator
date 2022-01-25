const Employee = require('./Employee'); //require this so that it would be the same common class

//This is a subclass- branching from Employee
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email); //this will get-name id email 
        this.officeNumber = officeNumber; //the only addition to this class is officeNumber 
    }
    getOfficeNumber() {return this.officeNumber;} // console.log(`Office Number: ${this.officeNumber}`);
    getRole(){return 'Manager';}//return string that includes the name 
}
//console.log('--Manager--')//checking this as a branch visiable by console
module.exports = Manager; //making this exportable- helpful when it comes down to file and test generation

