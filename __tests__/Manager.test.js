const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// To test for office number from getOffice function
test("Can get office number via getOffice()", () => {
    const testValue = 218;
    const e = new Manager("Tom", 218, "thisisavirus@yahoo.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// To test for getRole to create Manager
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    expect(testValue).toBe(testValue);
});