

const user = {
    username: "vishal",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} Welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Shukla";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "vishal"
//     console.log(this.username);
// }
// chai();


const chai = () => {
    let username = "vishal";
    console.log(this);
} 

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2,3));
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(2,3));
//const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username: "shukla"});
console.log(addTwo(2,3));

