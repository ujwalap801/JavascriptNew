
                //function declaration and statement
function test(a,b) //a and b 
{
    //def of function
   
    let sum = a+b;
    //return somedata
    return sum;
}

//invoke function
 let result =test(10,30)
 console.log(result);


           //function expression
 let test2 = function(a,b)
 {
    console.log(`a is ${a}`);
 }

 //call
 test2(100,200);


                  //Arrow function(simplied version of fun exp)
let test3 =(a,b)=>a+b;
let sum3 = test3(200,400);
console.log(sum3);



//Global Scope
let a=10;
let name ="ravi";
function test4()
{
    let x =100; //function scope or local scope
    console.log("a is", a);
    //block scope
     if(x =100)
     {
        //block scope varaiable
        let y=200;
     }
}

test4();

//block scope < function scope < global scope (time )



//hoisting(all declarations will move up)
console.log(x);  // we get  error Cannot access 'x' before initialization
var x =10; 


test1();   ///we don't get any error
function test1(){
    console.log("Test1");
}

result1(); //we get error
let result1 =function test22()
{
    console.log("Test22");
}