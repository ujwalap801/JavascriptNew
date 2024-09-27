// Function Statement or Function declaration
a();    //a called
function a()
{
    console.log("a called")
}
a();



// b(); //we get TypeError b is not a function
// Function Expression
var b = function()
{
    console.log("b called");
}
b();



// Named Function Expressions
var c = function xyz()
{
    console.log("C called");
}
c();
// xyz();  //we get Reference error



// First Class Functions -ability to be used  like values 
var z = function(para1)
{
    return function xyz()
    {

    }
}

console.log(z());





// Difference between paramaters  & Arguments
function function_name(para1,para2)
{
    // code statements
}
function_name(arg1,agr2);
