//object & event will make you master in js 
//constructor se banega singleton = obj.create
//literals se singleton nhi banta 

//++++ Object literals +++++



const sym = Symbol("key1")

const JSuser = {
    name: "abhishek", //obj in key: value
    "full name" : "abhishek malve" ,
    age:19,
    [sym] : "key1",
    location: "jaipur",
    email: "abhishekmalve@123.com",
    isLoggedIn: false,
    LastLoginDays: ["monday", "Saturday"]

}

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(JSuser[sym])
// console.log( JSuser)

// JSuser.email = "prasad@gmail.com"
// console.log(JSuser)
// // Object.freeze(JSuser)
// JSuser.email = "DD@gmail.com"
// console.log(JSuser ["email"])


JSuser.greeting = function(){
    console.log(`hello learner, ${this.name}`);
}


console.log(JSuser.greeting());
