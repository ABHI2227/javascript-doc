const user = {
    username: "Abhishek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

//this referce to the current context 

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

//browser global object is window object

// function chai(){
//     let username = "abhishek";
//     console.log(this.username);  //undefined 
// }

// chai()


// const chai = () => {
//     let username = "abhishek";
//     console.log(this); //undefined

// }

// chai()

// = () => {
//     arrow = function
// }

// const addTwo = (num1, num2) => { return num1+num2 }  //explicit function implementation

// const addTwo = (num1, num2) => (num1+num2)   //implecite function implementation

const addTwo = (num1, num2) => ({username:"abhishek"})


    


console.log(addTwo(3,4)) 


// cont myArray