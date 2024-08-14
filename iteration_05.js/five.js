// forEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]
//its a higher order function
// coding.forEach(iteam => {
//     console.log(iteam)
    
// });

// coding.forEach((val) => {
//     console.log(val)

// })

// function printMe(iteam){
//     console.log(iteam);
// }

// coding.forEach(printMe)


// coding.forEach((item
//     , index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "javascript",
        langusgeFileName: "js"
    },
    
    {
        languageName : "java",
        langusgeFileName: "java"
    },
    
    {
        languageName : "python",
        langusgeFileName: "py"
    }
]

myCoding.forEach((item)=>{

    console.log(item.languageName);

})

