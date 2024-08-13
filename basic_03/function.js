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

// console.log(loginUser("abhishek"))

//shoping cart user add things 

// ...restoperator and spread operator looks same but usecase ifs diff

function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200, 400 , 40))

const user = {
    username: "abhishek",
    Price: 100
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.Price} `)
}

handleObject({
    username: "sam",
    Price: 300
})

const Aarray = [200,100,400,200]

function returnArray(getArray){
    return getArray[1]
}

console.log(returnArray(Aarray))






