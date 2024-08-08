function myFirtsFunction(){
console.log("V");
console.log("I");
console.log("S");
console.log("H");
console.log("A");
console.log("L");
}
//myFirtsFunction();
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
//addTwoNumber(4, 7);
//addTwoNumber(4,"6");
//addTwoNumber(4,"a");

function addTwoNumber(number1, number2){
    return number1 + number2;
}
const result = addTwoNumber(4, 9);
//console.log(result);

function loginUserMessage(username = "shukla"){
    // if(username === undefined){
    //     console.log("Please enter username.");
    //     return;
    // }
    if(!username){
        console.log("Please enter username.");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("Vishal"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1;
}
//console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
    username: "vishal",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and proice is ${anyObject.price}`)
}

//handleObject(user);

// handleObject({
//     username: "shukla",
//     price: 299
// });

const myNewArray = [200, 400, 100, 600];
function returnSecondValueOfArray(getArray){
    return getArray[1];
}
//console.log(returnSecondValueOfArray(myNewArray));
console.log(returnSecondValueOfArray([200, 300, 400, 1000]));