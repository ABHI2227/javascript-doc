// math library came defualt in javascript so letss study it

const score = 400; //automatically declared number
// console.log(score);

const balance = new Number(100);   //declaraaitopn of number specifically
// console.log(balance);        
// console.log(balance.toString());   // Converts the number to a string
// console.log(balance.toFixed(2));   // Converts the number to a string, keeping 2 decimal places

const otherNumber = 1123.8966;
// console.log(otherNumber.toPrecision(4));   // Rounds the number to 3 significant digits

const hundred = 100000
// console.log(hundred.toLocaleString('en-IN')) //converts to local currency form

//++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
// // default library in javascript
// console.log(Math);
// console.log(Math.abs(-4)); //convert negative to positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6)); //before 5 it take
// console.log(Math.floor(4.6)); //after 5 it take
// console.log(Math.min(4, 3,  6, 9)) // to find minimunm value number
// console.log(Math.max(4, 3,  6, 9)); //tofind maximum value number

console.log(Math.random()); //o-1 everytime it gave value diff which is between 0 and 1

console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //math .random gives value from 0 & 1 ,1 SE UPPER FOLOOR TAKE LESS VALUE 
                                                     // (( MAX - MIN + 1 ) + MIN) MEANS IT IS ASSURING VALUE BE BELOW 20 AND ABOVE 10 