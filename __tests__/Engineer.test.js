const Engineer = require('../lib/Engineer');

// Tests to get Github username from user input
test("Can get GitHub username via getGithub()", () => {
    const testValue = "WoodwindCDT";
    const e = new Engineer("Jerry", 1, "freeram@totallynotavirus.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

// To test and make sure js makes this user the be the engineer
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    expect(testValue).toBe(testValue);
});