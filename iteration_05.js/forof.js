// for of = high order function
//array dpecific function , in js object and array is much powerfull

//  ["", "", ""]
//  [{}, {}, {}]


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = "Hello World"
// for (const greet of greeting) {
//     console.log(`eatch char is ${greet}`)
    
// }

// Maps in js = work on ket : value pair 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India")  //map doesnot take dublicate value

console.log(map)
//map is not iterable 
for (const key in map){
    console.log(key);
}



// //obj 
// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spider'
// }

// for (const [key, value] of myObject){
//     console.log(key, ':-', value);
// }

