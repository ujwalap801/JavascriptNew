// Packing
// array
let ar =[10,20]

// object
let emp={
    id:10,
    name:"xxx",
    address:{
        city:"hyd"
    }
}

// unpacking
ar[0]
ar[1]


emp.id
emp.name

// or

// let [x,y] =ar;
// console.log(x,y); //we get x, y

let [,y] =ar;
console.log(y);
 


// let {id,name} = emp;
// console.log(id, name); 

let {id, name,address:{city}} =emp;
console.log(city);

// let{name} =emp;
// console.log(name); 