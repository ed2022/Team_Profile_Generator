class Employee { //Main Class
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email; 
    }
    getId(){return this.id;} //console.log(`Id: ${this.id}`);
    getName(){return this.name;} //console.log(`Name: ${this.name}`);
    getEmail(){return this.email;} //console.log(`Email: ${this.email}`);
    getRole(){return 'Employee'} // console.log(`Email: Employee`);
}
module.exports = Employee;
  