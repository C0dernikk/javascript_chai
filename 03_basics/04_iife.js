//Immediately invoked function

(function (){ //also function chai()-- valid
    //Named iife
    console.log(`DB CONNECTED`);
})();//To avoid pollution by global scope we use iife as it is iife, expilcit ; required

//Unnamed iife, using arrow func
((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('AWS')
