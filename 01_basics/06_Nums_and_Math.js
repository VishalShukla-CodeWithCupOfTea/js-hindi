
//********************************************NUMBER*************************************** */
const score = 400;
//console.log(score);
const balance = new Number(100);
//console.log(balance);
//console.log(balance.toFixed(2));

const otherNumber = 12.5893;
//console.log(otherNumber.toPrecision(4));

const hundred =1000000;
//console.log(hundred.toLocaleString('en-IN'));
 
//********************************************Maths******************************************* */

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.3));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.9));

//console.log(Math.min(4, 3, 6, 8));
//console.log(Math.max(5, 6, 7, 8));
   
//console.log((Math.random()* 10) + 1);

const min = 10;
const max = 20; 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
