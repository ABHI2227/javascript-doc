// // if

// const isUserloggedIn = true 
// const temperature = 41



// if (temperature === ){
//     console.log("temparature is less than 50");
// }
// else {
//     console.log ("temparature is not grater than 50")
// }


// // <, >, <=, >=, == (check if it equal),!==, ===(it check type safety)
// // != (not equal)


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


// const balance = 1000

// if(balance > 500) console.log ("TEST"); //IMPLESEAT SCOPE

//+++++++++++ NESTING  ++++++

// if (balance < 500) {

//     console.log("less than");

// }else if (balance < 750){
//     console.log("less than 750")

// } else if (balance < 900){
//     console.log("less than 750");

// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true
if (userLoggedIn && debitCard ){
    console.log("Allow to buy course");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log ("User Logged in");
}












