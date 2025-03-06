// Primitive
// 7Types : String, Number, Boolean, null, undefined, symbol, BigInt
const score = 100
const scorePrecise = 100.5
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log( id == anotherId );

const bigNum = 190484738397928777777777777777777773n


// Non-Primitive or Reference type
// Array, objects, functions
 
const heros = ["shaktiman", "gangadhar", "bheem"]
let myObj={
    name: "nikhil",
    age: 21,
}
const myFunction=function(){
console.log("HELLO WORLD");
}

console.log(typeof bigNum);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof id);
// All non-primitive types have object datatype and for function also known as function object

// ******************************************

// Stack(Primitive), Heap(Non-Primitive)

let myName = "NIKHIL"
let myPetName = myName
myPetName = "NIKK"
console.log(myName);
console.log(myPetName);

let userOne = {
    email: "codernikk@gmail.com",
    age: 21
}
let userTwo = userOne
userTwo.age = 7
console.log(userTwo.age);
console.log(userOne.age);

let newString = "Giant"
newString = "Barbarians"
console.log(newString);

let test = new String("NIKK")
console.log(test);
// test = "MUSK" Reassigning changes it to primitive string 
// console.log( typeof test);










