let person ={
    id:1,
    name:"ravi"
}

//access props
console.log(person.name);
console.log(person['name']);

// Iterate(for-in)
for(let x in person)
{
    console.log(person[x]);
}



//Insert new Prop

person.city ="hyd";
console.log(person);

// Delete property
delete person.name;
console.log(person);

// Update Props
person.city ="chennai";
console.log(person);


//complex object
let student={
    rollno:100,
    Firstname:"uju",
    lastName:"wala",
    isQualified:true,
    skills:['css','js','react'],
    marks:[{maths:99},{science:88},{social:67}],
    address:{
        city:'hyd',
        street:"kph"
    },

    getName:function()
    {
        return this.Firstname+this.lastName;
    }
}


console.log(student.getName());