const Employee = require('./Employee'); //require this so that it would be the same common class

//This is a subclass- branching from Employee
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email); //this will get-name id email 
        this.school = school; //the only addition to this class is school 
    }
    getSchool(){return this.school;} // console.log(`School: ${this.school}`);
    getRole(){return 'Intern';}//return string that includes the name 
}
//console.log('--Intern--')//checking this as a branch visiable by console
module.exports = Intern; //making this exportable- helpful when it comes down to file and test generation

