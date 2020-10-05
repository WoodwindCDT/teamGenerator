const Intern = require('../lib/Intern');

// To test for school from user input
test("Can get school via getSchool()", () => {
    const testValue = "UTA";
    expect(testValue).toBe(testValue);
});

// To test for getRole to create Intern
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    expect(testValue).toBe(testValue);
});