
// Objects of different types
let student={};
let product={};

// Objects of same type
//create 200 student  objects==> 20*3 =600 properties


let student1 ={
    rollno:1,
    name:"ravi",
    age:21
};
let student2 ={
    rollno:2,
    name:"bhanu",
    age:22
};
let student3={
    rollno:3,
    name:"man",
    age:33
};

let emp1 ={};
let emp2={};
let emp3={};

// create class(blueprint)
class Emp{
    emp;
    name;
    salary;
}


// create objects
let em1 = new Emp();

let em2 = new Emp();

let em3 = new Emp();


//design class(blueprint of object)
class Person
{
    // name;
    // age;
    // gender;
   
    // to intialize object
    constructor(name,age,gender)
    {
         this.name=name;
        this.age= age;
        this.gender = gender
    }


    getPersonData()
    {
        console.log(this.name,this.age,this.gender)
    }
}

// create objects(instance) of class type
  let Person1 =new Person("ravi",21,"male");
  let Person2 = new Person("vinay",22,"female");

  console.log(Person1);
  console.log(Person2);
  console.log(Person1.getPersonData());

// Design student class
class Student{
    constructor(rollno,name, marks)
    {
          this.rollno = rollno;
          this.name = name;
          this.marks = marks;
    }

    getAverageMarks()
    {
        let sum = this.marks.reduce((acc,mark)=>acc+mark);
        let avg = sum/this.marks.length;
        return avg;
    }
}

// Create student objects
let student11 = new Student(100, "madhu",[90,56,70]);
console.log(student11.getAverageMarks());