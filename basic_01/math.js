// math library came defualt in javascript so letss study it

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString());   // Converts the number to a string
console.log(balance.toFixed(2));   // Converts the number to a string, keeping 2 decimal places

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));   // Rounds the number to 3 significant digits

const hundred = 100000
console.log(hundred.toLocaleString('en-IN')) //converts to local currency form