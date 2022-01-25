const Intern = require('../lib/Intern.js');

describe("Intern", () =>{
    test("Testing to get the name from intern", ()=>{
        var intern = new Intern("Lisa", 8, "lisa@tech.edu","Georgia Tech" );
        expect(intern.getName()).toBe("Lisa");  
    })
    test("Testing to get the id from intern", ()=>{
        var intern = new Intern("Lisa", 8, "lisa@tech.edu","Georgia Tech" );
        expect(intern.getId()).toBe(8);  
    })
    test("Testing to get the email from intern", ()=>{
        var intern = new Intern("Lisa", 8, "lisa@tech.edu","Georgia Tech" );
        expect(intern.getEmail()).toBe("lisa@tech.edu");  
    })
    test("Testing to get the school from intern", ()=>{
        var intern = new Intern("Lisa", 8, "lisa@tech.edu","Georgia Tech" );
        expect(intern.getSchool()).toBe("Georgia Tech");  
    })
    test("Testing to get the role", ()=>{
        var intern = new Intern("Lisa", 8, "lisa@tech.edu","Georgia Tech" );
        expect(intern.getRole()).toBe("Intern");  
    })
})