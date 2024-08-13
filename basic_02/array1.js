const hero = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// hero.push(dc)

// console.log(hero) //array get anything as data as it now taken array as daya

let A = hero.concat(dc) //addition of two array creating new array
console.log(A)

//spred operator ...hero ...dc

const B = [ ...hero, ...dc]
console.log(B)

const anotherArr = [1,3,2,3,4, [4,5,6] , [7,8,9,0[1,2,3,4]]]

const reanother = anotherArr.flat(Infinity)
console.log(reanother)


console.log(Array.isArray("abhishek"))
console.log(Array.from("abhishek"))
console.log(Array.from({name: "abhishek"})) // interesting


let score1 = 100
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3))

