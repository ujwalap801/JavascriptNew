// class person (parent or base class or super class)
class Persons{
    constructor(name, age, mobile,addreess)
    {
        this.name =name;
        this.age = age;
        this.mobile =mobile;
        this.addreess = addreess;
    }
}
// class student is a person (child class or sub class) 
class Students extends Persons{
    constructor(name, age, mobile, addreess, course, fee)
    {
        // Pass first  4 values to parent class
        super(name, age, mobile, addreess);
        this.course = course; 
        this.fee =fee;
    }

}

let student12 = new Students("ravi",12,9999, "hyd","ECE",1500); //total 6 values
console.log(student1);

let student22 = new Students("raviiii",12,9999, "hyd","ECE",1500); //total 6 values
console.log(student22)

// class Employee is a person
class Employee extends Persons{
    constructor(name, age, mobile, addreess, designation,company)
    {
        super(name, age, mobile, addreess);
        this.designation = designation;
        this.company = company;
    }
}


let emp11 = new Employee("uju", 22, 8911, "hno:8-30/Q/2", "chennai", "Developer", "ADP");


