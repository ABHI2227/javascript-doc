// reduce js 

const array = [1,2,3];

// const mytotal = array.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval 
// }, 0)

let mytotal = array.reduce((acc, curr) => acc+curr,0)

console.log(mytotal)

const shoppingCart = [
    {
        itemName : "js course",
        price: "999"
    },
    {
        itemName : "python course",
        price: "888"
    },
    {
        itemName : "C++ course",
        price: "777"
    },
    {
        itemName : "java course",
        price: "12999cd"
    }
]

const totalCart = shoppingCart.reduce((acc, item) => acc  +   item.price ,0)

console.log(totalCart)