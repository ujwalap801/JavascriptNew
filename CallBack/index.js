
// What is  a callback function in Javascript

setTimeout(function()
{
    console.log("timer");
})

function x(y)
{
 console.log("x")
 y();
}

x(function y()
{
    console.log("y")
})

// output :x 
        // y
        // timer

// closure 
function attachEventListener()
{
let count =0;
document.getElementById("clickMe").addEventListener("click",function xyz()
{
    console.log("Button clicked",++count);
});
}

attachEventListener();