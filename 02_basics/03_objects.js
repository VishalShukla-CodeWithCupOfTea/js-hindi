// like below you can create literal objects like normal object

//Object literals 
const mySymbol = Symbol("Key1");

const jsUser = {
    name: "vishal",
    "full name": "Vishal shukla",
    age: 30,
    [mySymbol]: "Key1",
    location: "jaipur",
    email: "vishal@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

//console.log(typeof jsUser[mySymbol])

//jsUser.email = "kumar@gmail.com";
//console.log(jsUser.email);
//Object.freeze(jsUser); //to prevent the additional value in this object so we can use Object.freez
//jsUser.email = "shukla@google.com";
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js Users");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());