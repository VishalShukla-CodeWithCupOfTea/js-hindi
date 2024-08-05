// # Primitive data type (it's also called as call by value) total types is 7

// string, number , boolean, null, undefined, symbol, BigInt

// # NonPrimitive data type (it's also called as call by refrence) total types is 

// Array, Object, function


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;

const Id = Symbol("123");
const anotherId = Symbol("123");


// console.log(Id);
//console.log(typeof anotherId);
// console.log(Id == anotherId);

const heros = ["Shaktiman", "Robert D. junior", "IronMan"];
let myObj = {
    Name: "Vishal Shukla",
    Age: 22,
} 
const myFunction = function() {
    //console.log("Hello");
}


//*****************************************************Memory type and allocation*********************** */

// 1- Stack (Primitive type) 2- Heap (Non-Primitive)

let myYTName = "vishal";
let myAnotherName = myYTName;

myAnotherName = "Shukla";
//console.log(myYTName)
//console.log(myAnotherName)

let userOne = {
    Email: "vishal@google.com",
    UpiId: "vishal@ybl12",
}

let userTwo = userOne;

userTwo.Email = "shukla@nw18.com";
console.log(userOne.Email);
console.log(userTwo.Email);

console.log(userOne);
console.log(userTwo);

