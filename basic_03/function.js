//function in JS
// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");
// console.log("S");
// console.log("H");
// console.log("E");
// console.log("K");


function sayMyName() { //fuction
    
    
console.log("A");
console.log("B");
console.log("H");
console.log("I");
console.log("S");
console.log("H");
console.log("E");
console.log("K");

}


// sayMyName() //sayMyname is referance



 function add(a,b ){

    // let result = a  + b
    // console.log("abhishek")
    return a + b

 }

const result = add(1,3)
// console.log( "Result: " , result) //


function loginUser(username = "sam"){
    if(!username){
        console.log("please Enter a User Name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser("abhishek"))