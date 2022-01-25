const Engineer = require('../lib/Engineer.js');

describe("Engineer", () =>{
    test("Testing to get the name from Engineer", ()=>{
        var engineer = new Engineer("Greg", 7, "greg@bob.com","gredHub45" );
        expect(engineer.getName()).toBe("Greg");  
    })
    test("Testing to get the id from Engineer", ()=>{
        var engineer = new Engineer("Greg", 7, "greg@bob.com","gredHub45" );
        expect(engineer.getId()).toBe(7);  
    })
    test("Testing to get the email from Engineer", ()=>{
        var engineer = new Engineer("Greg", 7, "greg@bob.com","gredHub45" );
        expect(engineer.getEmail()).toBe("greg@bob.com");  
    })
    test("Testing to get the gitHub username from Engineer", ()=>{
        var engineer = new Engineer("Greg", 7, "greg@bob.com","gredHub45" );
        expect(engineer.getHub()).toBe("gredHub45");  
    })
    test("Testing to get the role", ()=>{
        var engineer = new Engineer("Greg", 7, "greg@bob.com","gredHub45" );
        expect(engineer.getRole()).toBe("Engineer");  
    })
})