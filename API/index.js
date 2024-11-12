// js Obj
let person={
    pid:100,
    name:"ravi",
    age:21
}

// JSON
let personJson={
    "pid":100,
    "name":"ravi",
    "age":21
}

// convert js obj to JSON
 let personJsonConvert = JSON.stringify(person);
 console.log(personJsonConvert);

//  convert JSON to js obj
let jsPerson =JSON.parse('{"pid":100,"name":"ravi","age":21}');
console.log(jsPerson);