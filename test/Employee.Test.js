const Employee = require('./../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("It should create an object from the constructor function Employee", () => {
            const newEmployee = new Employee();
            expect(typeof newEmployee).toBe("object")
        });
    });
    describe("getName", () => {
        it("Should return the name provided to the constructor function as the first argument", () => {
            const newEmployee = new Employee("Hugo Sanchez", 123, "Juice@juice.com");
            const str = "Hugo Sanchez";
            const result = newEmployee.getName();
            expect(str).toEqual(result);
        });
    });
});
    describe("getId", () => {
        it("Should return the id provided to the constructor function as the second argument", () => {
            const newEmployee = new Employee("Hugo Sanchez", 123, "Juice@juice.com");
            const num = 123;
            const result = newEmployee.getId();
            expect(num).toEqual(result);
        });
    });
    describe("getEmail", () => {
        it("Should return the email provided to the constructor function as the third argument", () => {
            const newEmployee = new Employee("Hugo Sanchez", 123, "Juice@juice.com");
            const str = "Juice@juice.com";
            const result = newEmployee.getEmail();
            expect(str).toEqual(result);
        });
    });
    describe("getRole", () => {
        it("Should return the string: Employee", () => {
            const newEmployee = new Employee("Hugo Sanchezn", 123, "Juice@juice.com");
            const str = "Employee";
            const result = newEmployee.getRole();
            expect(str).toEqual(result);
        });
    });