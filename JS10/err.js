// what is error
// what happened when error is not handled (js engine terminate the prog execution abnormally)

// how to handle errors



let test ={
    name:"ravi"
    

}

try{
    if(test.city ===undefined)
    {
        throw new Error("city property removed");
    }
    else{
 console.log(test.city.length);
    }

}catch(error)
{
   console.log(error); 
}
finally{
    console.log("finally is exceuted");
}

console.log("hi");

let username ="ravi";
let city ="chennai";
console.log(`username is ${username} and city is ${city}`);


