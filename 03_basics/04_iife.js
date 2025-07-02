//Immediately invoked function
let num = 10;

function chai(){                                         
    //also function chai()-- valid
    //Named iife
    var num = 13;
    console.log(`DB CONNECTED ${num}`);
}

chai();

(function chai(){ //also function chai()-- valid
    //Named iife
    let num = 11;
    console.log(`DB CONNECTED ${num}`);
})();
//To avoid pollution by global scope we use iife as it is iife, (expilcit ; required)

//Unnamed iife, using arrow func
((name) => {
    let num = 12;
    console.log(`DB CONNECTED 2 ${name}, ${num}`);
    
})('AWS');
// Normal function's definition does not get deleted even after usage but iife get's deleted --> hence choose according to number of execution required. Regualar function does pollute if it is defined in a global scope, while iife does not pollutes.