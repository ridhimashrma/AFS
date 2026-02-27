"use strict";
//union type 
//let a=10;
// a="hello";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 10;
a = "18";
let emp1 = {
    name: "Ridhima",
    empId: "E123",
    age: 20,
    dept: "CSE",
    salary: 60000000,
    //phone:1234567890,
    projectId: "P123",
    projectName: "Project A",
    isActive: true
};
let emp2 = {
    name: "Ridhima",
    empId: "E123",
    age: 20,
    dept: "CSE",
    salary: 60000000,
    phone: 1234567890,
    projectId: "P123",
    projectName: "Project A",
    isActive: true,
    bloodGroup: "B+"
};
let emp3 = {
    name: "Ridam",
    empId: "E124",
    age: 22,
    dept: "ECE",
    salary: 5000000,
    phone: 9876543210,
    bloodGroup: "O+"
}; //that first interface EMployee got extended with bloodGroup property
console.log(emp1.age);
//# sourceMappingURL=index.js.map