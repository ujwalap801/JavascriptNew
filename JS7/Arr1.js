let marks =[90, 58,79,58,10];

// Filter(selection)
// get all element less than 50
let result1 =marks.filter((e)=>e<50);

// get all elements between 30 and 90
let result2= marks.filter((e)=>e>30 && e<90);

console.log(result1);
console.log(result2);


// Map(modification)
// add 10 for each element
let result3 = marks.map((e)=>e+10);
console.log(result3);

// add 10 for the element lesstan 50 and 20 for greater
let result4 = marks.map(element=>
{
    if(element<50)
    {
        return element+10
    }
    else{
        return  element+20;
    }
}
)
console.log(result4);

// forEach(iteration)
marks.forEach((e,index)=>{
    console.log(e,index);
})