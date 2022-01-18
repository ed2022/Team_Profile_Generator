const Employee = require('./Employee'); //require this so that it would be the same common class

//This is a subclass- branching from Employee
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(id,name,email); //this will get-name id email 
        this.officeNumber = officeNumber; //the only addition to this class is officeNumber 
    }
    getOfficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`);
        return this.officeNumber;
    }
    getRole(){return 'Manager'}//return string that includes the name 
}
console.log('--Manager--')//checking this as a branch visiable by console

Manager.getOfficeNumber(); //calling on the methods
Manager.getrole(); //calling on the methods 

module.exports = Manager; //making this exportable- helpful when it comes down to file and test generation

