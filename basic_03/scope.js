var c = 300;   //gl0bal scope

if(true){

    // let a = 10;
    const b = 9;   //blockscope
    var c = 7;
}




// 0. console.log(a)
// console.log(c)
// console.log(c)

function one(){
 const   username =  "Abhishek"
    // return username
        function two(){
          const  lastname = "Malve"
          console.log(username)
            // return lastname
      
        }
        // console.log(lastname)
// two()
}

one()


// chaild can access parent function but parent can't


if (true){
    const username = "abhishek"
    if (!username){
        const website = "yhoutube"
        console.log(username + website);
    }
}


//++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++

function addone(num){
    return num + 1

}

console.log(addone(5))

const addTwo = function(num){
    return num + 2

}

console.log(addTwo(5))

// we cant use function before declaration and JS code works line by line