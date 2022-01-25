const Manager = require('../lib/manager.js');

describe("Manager", () =>{
    test("Testing to get the name from manager", ()=>{
        var manager = new Manager("Addy", 8, "addy@micro.com",9956 );
        expect(manager.getName()).toBe("Addy");  
    })
    test("Testing to get the id from manager", ()=>{
        var manager = new Manager("Addy", 8, "addy@micro.com",9956 );
        expect(manager.getId()).toBe(8);  
    })
    test("Testing to get the email from manager", ()=>{
        var manager = new Manager("Addy", 8, "addy@micro.com",9956 );
        expect(manager.getEmail()).toBe("addy@micro.com");  
    })
    test("Testing to get the school from manager", ()=>{
        var manager = new Manager("Addy", 8, "addy@micro.com",9956 );
        expect(manager.getOfficeNumber()).toBe(9956);  
    })
    test("Testing to get the role", ()=>{
        var manager = new Manager("Addy", 8, "addy@micro.com",9956 );
        expect(manager.getRole()).toBe("Manager");  
    })
})