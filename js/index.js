"use strict";
 
// var accessFruits =[];

// function myFruits (){
//     var fruits =["mangoes", "bananas"];
//     accessFruits.push(fruits)
// }
// myFruits();


// console.log(accessFruits);

// TEMPLATE STRING
// var myName ="Carlos";
// var age ="25";

// var data = `My name is ${myName} and i am ${age}`;
// console.log(data);


// // for each
// var fruits =["mangoes", "bananas", "apples","guavas"];


// fruits.forEach((fruits, index)=>{
//     console.log(`fruit ${fruits} is in index ${index}`);
// })

// // filter 

// var filteredFruit = fruits.filter((fruit)=>{
//     return fruit.startsWith("b");
// })
// console.log(filteredFruit);

// // map - returns in a new array

// var newFruits = fruits.map((fruit)=>{
//     return fruit;
// })

// console.log(newFruits);


// // sort
// var numbers =[20, 5, 10, 100, 2000, 63];
// // console.log(numbers.sort());
// var sortedNumbers = numbers.sort((a,b)=>{
//     return a - b;
// })
// console.log(sortedNumbers);

// // reduce
// var addedNumbers = numbers.reduce((number, total)=>{
//     return number + total;
// })
// console.log(addedNumbers);

var product = [
    {
        name: "phone",
        id :"1",
        desc :"iphone 13",
        quantity : 30 ,
    },
    {
        name :"phone",
        id :"2",
        desc :"iphone 10 pro",
        quantity : 38,
    },
    {
        name : "phone",
        id :"3",
        desc :"samsung s8+",
        quantity : 50,
    },
    {
        name :"laptop",
        id :"4",
        desc :"hp folio",
        quantity : 50,
    }
];

// find

var findData = product.find((product)=>{
    var {name ,id, desc, quantity} = product;

    return name === "phone";
})
console.log(findData);





// CLASSES
function Person(name, age, country){
    this.name = name;
    this.age = age;
    this.country = country;
}
// creating a function in the class

Person.prototype.sayHi =()=>{
    console.log("HI");
}

// var carlos = new Person("Carlos",25, "kenya");
// console.log(carlos)

// // calling the function
// carlos.sayHi();


function carlos(occupation, hobbies, status,name, age, country){
    Person.call(this,name, age, country)
    this.occupation = occupation;
    this.hobbies = hobbies;
    this.status = status
}

var newCarlos = new carlos("developer","coding","single","Carlos",25, "kenya");
console.log(newCarlos);

// Rolling a dice

const play =(max, min) => Math.trunc(Math.random()*(max - min + 1)) +min;
    
console.log(play(6,1));  
 
    

