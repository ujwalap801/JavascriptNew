// HTTP clients
// make HTTP GET req
function getData()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then(users=>console.log(users))
    .catch((err)=>console.log(err));
   
}

getData();

// get products data
function getproducts()
{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(products=>console.log(products))
    .catch((err)=>console.log(err));
}


getproducts();