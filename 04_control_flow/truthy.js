// const userEmail = "NIKK@email"
// //userEmail is non empty and hence has a true value and if empty then false value
// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
    
// }
// //Falsy values --> Values which are False
// // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// //Truthy values --> Values which are True
// // "0", 'false', " ", [], {}, function(){} = Empty function

// const userArr = []
// if(userArr.length === 0){
//     console.log("Array is empty");
    
// }
// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is empty");
    
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 14
val1 = null ?? undefined ?? 3 ?? 5
console.log((val1));

//Ternary operator

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80")



