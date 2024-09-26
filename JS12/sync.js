// Synchronous 1->2->3
// Asynchronous 1->3->2


// 1.code before time consuming task
console.log("first");

// 2.Time consuming task(10sec)
   // time functions
   setTimeout(()=>
    {
        console.log("time consuming task");
    },5000);

    
// 3.code after time consuming task
console.log("last");