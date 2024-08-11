//string is immutable means it does not chage actual string its just making its copy and changing it 
//there are n numbers of methods thrugh which we can manipulate string
//the modification in the string does not change the actual string cause it immutable==cantChangeTheActualOne


const name = "  Abhishek  ";
console.log(name);                    //printing string
console.log(name.length)              //denoting the length of the character used in the string
console.log(name.charAt(8))           //showing the character at the 8th position
console.log(name.charCodeAt(0))       //retuns the character code of the given number from utf-16 code
console.log(name.at(-4))              //target value from the back of a string,we can revert the string using it 

console.log(name.slice(-2,0))         //the slice is used to cut as the word says caus it do it accordingly
console.log(name.substring(1,3))      //same as slice but deal with 0 only 
console.log(name.substr(2,3))           //only take the given position as output
console.log(name.toUpperCase())         //convetrt to uppercase
console.log(name.toLowerCase())         //convert to lower case
console.log(name.concat("Malve"))        //join it with the string
console.log(name.trim())                 //delete the space
console.log(name.trimStart())            //delete space from the start
console.log(name.trimEnd())               //same as but from end 
console.log(name.padStart(20, "4"))       //It pads a string with another string (multiple times) until it reaches a given length.
console.log(name.padEnd(20,"A"))          //padend modify the string with the given length from start
console.log(name.repeat(5))               //same as above but from end
console.log(name.replace("A","E"));        //repace existing word with new one
console.log(name.replaceAll("Abhishek","Prasad"));      //replace whole string with the given new string 
console.log(name.split(","));                           // split the string inbetween in the , 
console.log(name.split(""))                             //split string with each word //we can say convert string as Array
// console.log(name)                                   //