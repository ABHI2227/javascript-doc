//Immidiately Invoked Function Expressions (IIFE)
//An Immediately Invoked Function Expression (IIFE) is a function that
//  is executed right after it is defined. It's a common JavaScript pattern
//   used to create a local scope and avoid polluting the global namespace.

(function chai() {

    // named IIFE
    console.log(`DB Connected`);
})();

((name) => {

    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);

})("Abhishek");

 