// IF statement

// const isUserLoggedIn = true;
// const tempreature = 41;
// if(tempreature < 50){
//     console.log("Less than 50");
// } else{
//     console.log("Tempreature is greater than 50");
// }

// const score = 200;
// if (score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`); 
// }
// console.log(`User power: ${power}`); 



const balance = 1000;
// if(balance> 500) console.log("test"), console.log("Test2");  Not a statndard code, don't write like this


// if(balance < 500){
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const isUserLoggedIn =true;
const debitCard =true;
const loggedInFromGoogle = false;
const loggedInFromEmail= true;

// if(isUserLoggedIn && debitCard && 2==2){
//     console.log("Allow to buy course");
// }
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In...");
}