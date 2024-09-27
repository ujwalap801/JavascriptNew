function outer()
{
  
    function inner()
    {
        console.log(a);
    }
    let a =10;
    return inner;
}

 
outer()();//10 if we use let and var varianle same output will get

 var close = outer();
console.log(close);
// output
// inner()
//     {
//         console.log(a);
//     }


function outer(b)
{
    function inner()
    {
        console.log(a,b);
    }
    let a =10;
    return inner;
}

var close = outer("hello"); //10 hello
close();



function outest()
{
    var c=50;
    function outer(d)
    {
        var e=60
        function inner()
        {
            console.log(e,d,c)
        }
        inner();
    }
    outer(70);
}

var output = outest(70);
console.log(output);   //60 70 50