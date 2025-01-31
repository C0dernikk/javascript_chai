//Immediately invoked function

(function chai(){
    //Named iife
    console.log(`DB CONNECTED`);
})();//To avoid pollution by global scope we use iife as it is iife, expilcit ; required

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('AWS')
