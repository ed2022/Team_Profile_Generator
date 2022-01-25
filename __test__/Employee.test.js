const Employee = require('../lib/Employee.js');

describe("Employee", () =>{
    test("Testing to get the name", ()=>{
        var employee = new Employee("Greg", 7, "greg@bob.com");
        expect(employee.getName()).toBe("Greg");  
    })
    test("Testing to get the id", ()=>{
        var employee = new Employee("Greg", 7, "greg@bob.com");
        expect(employee.getId()).toBe(7);  
    })
    test("Testing to get the email", ()=>{
        var employee = new Employee("Greg", 7, "greg@bob.com");
        expect(employee.getEmail()).toBe("greg@bob.com");  
    })
    test("Testing to get the role", ()=>{
        var employee = new Employee("Greg", 7, "greg@bob.com");
        expect(employee.getRole()).toBe("Employee");  
    })
})


