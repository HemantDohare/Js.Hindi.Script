// Immediately Invoked Function Expressions (IIFE)

// to avoid global scope pollution in entire code 

(function chai(){ 
    //name IIFE
    console.log(`DB connceted`);

})();

( (name) => {
    // simple IIFE
    console.log(`DB Connected Two ${ name}`);

})("hemant");