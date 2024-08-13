// // dates in js 
// // it was counte in milisec in js 


// // let myDate = new Date()
// // console.log(myDate.toString())
// // console.log(myDate.toLocaleString())
// // console.log(myDate.toISOString())
// // console.log(myDate.toJSON())
// // console.log(myDate.toUTCString())


// // let myCreatedDate = new Date(2023 , 0, 23)
// // let myCreatedDate = new Date("2023-01-23") 
// let myCreatedDate = new Date("01-14-2023") //mmddyy


// // console.log(myCreatedDate.toLocaleDateString()) //todays date :)

// console.log(myCreatedDate);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())

// stringinterpolation  $``

newDate.toLocaleString('default',{
    weekday: "long",
    
})




