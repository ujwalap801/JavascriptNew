let users=[
    {
        id:1,
        name:"ravi",
    },
    {
       id:2,
       name:"vikas"
    }];

// Access elemetns

for(let useObj of users)
{
    console.log(useObj);
}



//Inserting elements dynamically
        //  start
        users.unshift({id:3,name:"uju"});
        console.log(users);

        // end
        users.push({id:4,name:"vinay"});
        console.log(users);

        // in between
        users.splice(2,0,{id:6, name:"var"})
        console.log(users);

        // delete element//

        //  start

        // end

        // in between



        // update element
