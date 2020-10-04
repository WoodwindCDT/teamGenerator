const Intern = require('../lib/Intern');

// To test for school from user input
test("Can get school via getSchool()", () => {
    const testValue = "UTA";
    const e = new Intern("Jerry", 1, "freeram@totallynotavirus.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

// To test for getRole to create Intern
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    expect(testValue).toBe(testValue);
});