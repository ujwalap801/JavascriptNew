// About document object
console.log(document);

// Access head & body of DOM
console.log(document.head);
console.log(document.body);

// Access other elements
let heading1 = document.querySelector('#heading1');
console.log(heading1);

let heading2 = document.querySelector('.heading2');
console.log(heading2.textContent);

let btn1 = document.querySelector('.btn1');
let btn2= document.querySelector('.btn2');
let parent = document.querySelector(".parent");
let p =document.querySelector('p');

// Adding event handler
btn1.addEventListener('click',()=>
{
    // change content dynamically
    heading1.textContent = "Document Object Model";

    // change styles dynamically
    heading2.style.color="red";
    heading1.style.backgroundColor="pink";
    heading1.style.fontSize ="50px";

    // create element & add to DOM
    let h2 = document.createElement('h2');
    h2.textContent="This is dynamic element"
    h2.style.color="yellow";
    
    // Add element to page
    parent.appendChild(h2);

})

    // remove elements from DOM

    btn2.addEventListener("click",()=>
    {
        // removing an element itself
        heading2.remove();

        // remove child element
        document.body.removeChild(p);
    })

