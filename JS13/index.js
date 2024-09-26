// create a promise
function someAsyncTask()
{
    console.log("I will meet you in 10 mins");
    let condition = false;
    // return "promise"
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
        if(condition === true)
        {
            resolve("Hello frnd..how are you?");
        }
        else{
            reject("Sorry frnd.. meet you later");
        }
    },7000)
     
    })
}

// consume promise
someAsyncTask()
.then((res)=>
{
    console.log("response is ",res);
}
).catch((err)=>
{
console.log("error is",err)
})



// Getting First Rank
// child make promise
function promiseofGettingRank()
{
    let readWell = false;
    console.log("child promises to get first rank");
    return new Promise((resolve,reject)=>
    {
        if(readWell === true)
        {
            resolve("Got first rank")
        }
        else{
            reject("didn't achieve it")
        }
    })
}

// parents consume promise
promiseofGettingRank().then(res=>
{
    console.log(res);
}
).catch((err)=>
{
    console.log(err);
})

