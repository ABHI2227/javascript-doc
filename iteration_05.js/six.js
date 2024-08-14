// const coding = ["js", "ruby", "java", "python", "cpp"]

//forEach loop does not return value
// const values = coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter((num ) => {
//     return num > 4
// })


// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }

// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1781,
    edition: 2004},
{title: 'Book Two', genre: 'History', publish: 1981,
    edition: 2005},
];

// const userBooks = books.filter ((bk) => bk.genre ===  'History' )
const userBook = books.filter ((bk) =>
      {return bk.publish >= 1700 && bk.genre === 'Fiction'} )
console.log(userBook);


