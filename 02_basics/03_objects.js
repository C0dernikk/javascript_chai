// Singleton (Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

//Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

//Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior

// Object.create --> using constructor

// Object Literals  (The only difference is of Singleton)

const mySym = Symbol("123")
const JSuser = {
    name: "Nikhil",
    'Full Name': "Nikhil Gupta",//Can't be accessed through '.' operator, as there is space -- In JavaScript, dot notation (JSuser.key) only works for valid identifiers (letters, numbers, _, $).
    age: 21,
    [mySym]: "NewKey",// For using key as a symbol
    email: "xyz@india.com",
    location: "Bhagalpur",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Wed"]
}

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser['Full Name']);
console.log(JSuser.mySym);// Jsuser.mySym is of string type(not used as symbol) when no []
console.log(JSuser[mySym]);// For using key as symbol
console.log(typeof mySym);
console.log(typeof JSuser[mySym]);

JSuser.email = "NIKK@legend.com"
console.log(JSuser);

// Object.freeze(JSuser)
JSuser.email = "NIKK@micro.com"

console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello Js user");
}
JSuser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}
JSuser.greeting()
JSuser.greeting2()




