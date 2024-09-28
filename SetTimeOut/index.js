console.log("start");

setTimeout(function()
{
    console.log("callback");
},5000);


console.log("End");
// milliom

let startDate = new Date();
let endDate = startDate;

while(endDate <startDate +1000)
{
    endDate = new Date().getTime();

}

console.log("while expires");






console.log("s");

setTimeout(function cd()
{
    console.log("callback");
},0);

console.log("E");

// output s E callback
