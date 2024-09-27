// simple params
function findSum(a,b)
{
    return a+b;
}

console.log(findSum())   //we get NAN as output 

// default value params
function findSum2(a=0,b=0)
{
    return a+b;
}

console.log(findSum2())//reuslt =0


// rest params
function findSum3(...a)
{
    return a.reduce((acc, ele)=>acc+ele);
}


console.log(findSum3(10,20,60,60,33,45,66,224,666,444));