class Employee { //Main Class
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email; 
    }
    getId(){ console.log(`Id: ${this.id}`); return this.id;}
    getName(){console.log(`Name: ${this.name}`); return this.name;}
    getEmail(){console.log(`Email: ${this.email}`); return this.email;}
    getRole(){return 'Employee'}
}

Employee.getId();
Employee.getName();
Employee.getEmail();
Employee.getRole();

module.exports = Employee;
  