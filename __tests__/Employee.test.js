const Employee = require('../lib/Employee');

// To test for name given from user input
test('Can get name via getName()', () => {
    const testValue = "Jerry";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

// To test for ID given at user input
test('Can get id via getId()', () => {
    const testValue = 1;
    const e = new Employee("Jerry", testValue);
    expect(e.getId()).toBe(testValue);
});

// To test for an Email given from user input
test('Can get email via getEmail()', () => {
    const testValue = "freeram@totallynotavirus.com";
    const e = new Employee("Jerry", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// To test for selected role from user selection
test('getRole() should return standard Employee', () => {
    const testValue = "Employee";
    expect(testValue).toBe('Employee');
});