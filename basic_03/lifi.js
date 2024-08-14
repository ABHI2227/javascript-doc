//Immidiately Invoked Function Expressions (IIFE)

(function chai() {

    // named IIFE
    console.log(`DB Connected`);
})();

((name) => {

    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);

})("Abhishek");

 