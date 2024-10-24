function x()   //x is callback
{
    console.log("Namaste");
}


function y(x)   //y is highorder
{
    x();
}



const radius =[3,1,2,4];

const area = function(radius)
{
    return  Math.PI * radius*radius;
}

const circumference = function(radius)
{
    return 2*Math.PI *radius;

}

const Diameter = function(radius)
{
    return 2*radius;
}

const calculate = function(radius,logic)
{
       const output =[];
       for(let i=0;i<radius.length;i++)
       {
        output.push(logic(radius[i]));
       }

       return output;
}


console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,Diameter));


// 1: Function that Returns a Function

// A higher-order function that returns another function
function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    };
}


// Create a function that doubles the input
const double = createMultiplier(2);

// Create a function that triples the input
const triple = createMultiplier(3);

// Using the functions
console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15
