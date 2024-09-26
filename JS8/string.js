let quote ="welcome to javacript";
let test ="abc" /// ['a' , 'b', 'c];


console.log(typeof test);
console.log(test[0]);
console.log(test[1]);


// lenght of string
console.log(quote.length);

// get substring
console.log(quote.substring(1,4))

// find char at specific index
console.log(quote.charAt(1));


// find index of a char
console.log(quote.indexOf('e'));

// case conversion
console.log(quote.toUpperCase());

// join strings
let str1 ="hello";
let str2 ="world";
console.log(str1+str2);
console.log(str1.concat(str2));

// split string into array
console.log(quote.split())

let testObj ={
    a:10,
    b:20
}

testObj.a =124;
console.log(testObj);