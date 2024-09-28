const arr =[5, 1, 3, 2,6];

// Double =[10,2,6,4,12]
function double(x)
{
    return x*2;
}

const output = arr.map(double);

console.log(output);

// Binary 
function binary(x)
{
    return x.toString(2);
}

const output1 = arr.map(binary);

console.log(output1);



//Filter
const arr1 =[5,1,3,4,6];

function isEven(x){
    return x % 2==0;
}


const output2 = arr.filter(isEven);
console.log(output2);


const output3 = arr.filter(
    function isEven(x){
        return x % 2==0;
    }
    
);
console.log(output3);


const output4 = arr.filter((x)=> x%2==0);
console.log(output4);


// REDUCE
// sum
const arr2 =[5,4,3,7,9,2];
const output5 = arr.reduce(function(acc,cur){
        
    acc = acc+cur;
    return acc;
},0)

console.log(output5);

// Max
const output6 = arr.reduce(function(max,curr)
{
    if(curr > max)
    {
        max = curr;
    }
    return max;
},0);

console.log(output6);