function findSum(...a)
{
    console.log(a);

    let sum = a.reduce((acc,ele)=>acc+ele);
    return sum;
}


let result = findSum(10,20,30);
console.log(result);