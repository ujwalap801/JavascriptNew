let marks =[20, 10, 40];

// Access Elements
for(let element of marks)
{
    console.log(element);
}


//Inserting elements dynamically
        //  start
        marks.unshift(50);
        console.log(marks);
        marks.unshift(50,60);
        console.log(marks);

        // end
        marks.push(20);
        console.log(marks);
        marks.push(80,90);
        console.log(marks);

        // in between(index bases insertion)
        // marks.splice(2,0,100,200); at index 2  100 and 200 are stored
        console.log(marks);


        // delete element//
        
        //  start
        let m1 =marks.shift();
        console.log(m1);

        // end
        let m2 = marks.pop();
        console.log(m2);

        // in between
         let result= marks.splice(1,2);
         console.log(result);


        // update element
        console.log(marks);
        marks.splice(1,1,2345);
        console.log(marks);