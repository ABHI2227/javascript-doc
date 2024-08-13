const array = [0, 1, 2, 3, 4, 5, 6]; 

// array is resizable 
// array can't be accessed through arbitrary string

console.log(array[0]);

// shallow copy = heap; array makes shallow copy
// deep copy = stack

const myArrayTwo = new Array(1, 2, 3, 4, 4);
console.log(myArrayTwo[2]);

// array methods

myArrayTwo.push(8); // add new value from the back
myArrayTwo.pop();   // remove value from the back
myArrayTwo.unshift(2); // add value from the start
myArrayTwo.shift(); // remove number from start

console.log(myArrayTwo.includes(22)); // boolean output
console.log(myArrayTwo.indexOf(2));   // returns the index of the first occurrence of the value, or -1 if not found

const newArray = myArrayTwo.join();
console.log(newArray);
console.log(typeof newArray); // changed the type into string

// slice= it change the copy of an array, splice = it change the ref of an array

console.log("A", newArray);

const myn1 = newArray.slice(1, 3);
console.log(myn1);
console.log("B", newArray);

const myn2 = myArrayTwo.splice(1, 3); // Splice should be used on the original array, not the string result from join
console.log(myn2);
console.log(myArrayTwo); // This will show the modified original array after splicing

