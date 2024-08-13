// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12ab"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        firstName: "abhishek",
        lastName: "malve"
    }
}

// console.log(regularUser.fullname.firstName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({}, obj1,obj2)
// console.log(obj3)
// console.log(obj4)


const user = [
    id="1",
    email="abhishekmalve@gmail.com",
    {
    },
    {

    },
    {

    },
    {

    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//distucture value of obj 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Abhishek"
}

// course.courseInstructor

const {courseInstructor : i} = course  //distructure

console.log(i);

const navbar = ({company}) => {

}

navbar(company = 'abhishek') 

// {
//     "name": "abhi",
//     "coursename": "js in eng",
//     "price": "free",
// }

[   
    {},
    {},
    {}
]

