class Employee { //de
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email; 
    }
    printInfo() {
      console.log(`Id: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Email: ${this.email}`);
    }
}
module.exports = Employee;
  