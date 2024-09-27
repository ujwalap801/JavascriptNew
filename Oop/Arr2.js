let users =[
    {id:1, name:"uju",age:89,salary:20000},
    {id:2, name:"ujwala",age:9,salary:90000},
    {id:3, name:"vini",age:90,salary:40000},
    {id:4, name:"vinay",age:99,salary:50000},
]

// Filter
// get users whose age lessthan 22
 let users1 = users.filter((userObj)=>userObj.age<22);
 console.log(users1);

//  map
// add 5000 slaray for each user 
let users2 = users.map(userObj=>
{
    userObj.salary = userObj.salary+5000;
    return userObj;
}
)
console.log(users2);

// To add salary based on age Using map
let users3 = users.map(userObj=>{
    if(userObj.age<50)
    {
        return userObj.salary+1000;
    }
    else{
        return userObj.salary-2000;
    }
})

console.log(users3);


//find user with lowest salary
let user4 = users.reduce((acc,userObj)=>userObj.salary <acc.salary?userObj:acc);
console.log(user4);