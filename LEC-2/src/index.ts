//union type 
//let a=10;
// a="hello";

type numberOrString = number | string;
let a: numberOrString;
a=10;
a="18";

interface Employee{
    name:string,
    empId:string,
    age:number,
    dept:string,
    salary:number,
    phone:number
}
interface teamLead{
    name:string,
    empId:string,
    age:number,
    dept:string,
    salary:number,
    projectId:string,
    projectName:string,
    isActive:boolean
}


//union of employee and teamLead

type EmpOrTeam=Employee | teamLead;
let emp1:EmpOrTeam={
    name:"Ridhima",
    empId:"E123",
    age:20,
    dept:"CSE",
    salary:60000000,
    //phone:1234567890,
    projectId:"P123",
    projectName:"Project A",
    isActive:true
}

//intersection type ----> &

type EmpAndTeam=Employee & teamLead;
let emp2:EmpAndTeam={
    name:"Ridhima",
    empId:"E123",
    age:20,
    dept:"CSE",
    salary:60000000,
    phone:1234567890,
    projectId:"P123",
    projectName:"Project A",
    isActive:true,
    bloodGroup:"B+"
}


//can i create union and intersection type using interface 

interface Employee{
    bloodGroup:string
}
let emp3:Employee={
    name:"Ridam",
    empId:"E124",
    age:22,
    dept:"ECE",
    salary:5000000,
    phone:9876543210,
    bloodGroup:"O+"
}//that first interface EMployee got extended with bloodGroup property


console.log(emp1.age)