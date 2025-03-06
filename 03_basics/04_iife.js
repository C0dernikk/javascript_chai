//Immediately invoked function
let num = 10;
(function chai(){ //also function chai()-- valid
    //Named iife
    let num = 11
    console.log(`DB CONNECTED ${num}`);
})();//To avoid pollution by global scope we use iife as it is iife, (expilcit ; required)

//Unnamed iife, using arrow func
((name) => {
    let num = 12
    console.log(`DB CONNECTED 2 ${name}, ${num}`);
    
})('AWS');
