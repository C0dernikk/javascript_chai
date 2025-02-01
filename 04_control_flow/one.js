// if

const isUserLoggedIn = true

if (isUserLoggedIn){

}

// <, >, <=, >=, ==, !=, ===, !==

const temperature = 41
if( temperature === 41){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
console.log("Executed always");

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); Power is not in a scope

const balance = 1000

// if(balance > 100) 
//     console.log("Test1"),console.log("Test2"); Don't use this syntax

// if(balance < 500){
//    console.log("Less than");
   
// }
// else if(balance < 750){
//     console.log("less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}