//NON-PRIMITIVES

//ARRAY
let arr =[10, 20, 30, 40];

//access elements
console.log(arr[0]);

// while loop
let index =0;
while(index <arr.length)
{
    console.log(arr[index]);
    index++;
}


// for-of-loop
for(let v of arr)
{
   console.log(v);
}

console.log("hi");
// OBJECTS

let student={
    sno:100,
    name:'ujwala',
    email:'uju@gmail.com',
    age:21,
    marks:[90,40,44],
    address:{
        street :"khh",
        pincode:899,
        city:"hyderabad"
    }

}

// Access Properties
console.log(student.sno);
console.log(student["name"])


// Iterate an Object
// for-in Loop
for(let key in student)
{
    
    console.log(student[key]);
}


// Product Object
let product={
    pid:100,
    pname:'TV',
    brand:"salary",
    manufacture:{
        name:"john",
        city:"bangalore",
    },
    getProductName:function()
    {
        //process the data of obj
        console.log(this.pid)    //if this function want to use object vales if can we this keyword
    }
}


product.getProductName();