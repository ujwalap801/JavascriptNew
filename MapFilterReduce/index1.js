const people = [
    { firstName: "John", lastName: "Doe", age: 26 },
    { firstName: "Jane", lastName: "Smith", age: 75 },
    { firstName: "Emily", lastName: "Johnson", age: 26 },
    { firstName: "Michael", lastName: "Brown", age: 35 },
    { firstName: "Emma", lastName: "Davis", age: 78 }
  ];
  
 
// Map
  const output1 = people.map((x)=>x.firstName+ " "+x.lastName);
  console.log(output1);
  
 //acc={26:2, 75:1, 78:1, 35:1}
  const output2 = people.reduce(function(acc,curr)
{
   if(acc[curr.age])
   {
        acc[curr.age] = ++acc[curr.age];
   }
   else{
     acc[curr.age] =1
   }
   return acc;
},{})

console.log(output2)



// Filter -Age lessthan 30
const output3 = people.filter((x)=>x.age <30).map((x)=>x.firstName);
console.log(output3);