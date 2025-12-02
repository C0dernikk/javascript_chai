// Singleton (Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

//Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

//Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior

// Object.create --> using constructor

// Object Literals  (The only difference is of Singleton)

const mySym = Symbol("123")
let num = 12
const JSuser = {
    name: "Nikhil",
    [num] : "143",
    'Full Name': 'Nikk',
    'Full_Name': "Nikhil Gupta",//Can't be accessed through '.' operator, as there is space -- In JavaScript, dot notation (JSuser.key) only works for valid identifiers (letters, numbers, _, $).
    age: 21,
    [mySym]: "NewKey",// For using key as a symbol
    email: "xyz@india.com",
    location: "Bhagalpur",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Wed"],
    getData: function (){
        console.log(this.name, this.email);
        
    }
}

// 1. key: value this key can be accessed using (.) as well as using square brackets ['key'] (key does not have space inside it)
// 2. "key": value this key can be accessed using (.) as well as using square brackets ['key'] (key does not have space inside it)
// 3. "key 1": value this key can be accessed using ['key 1] only
// 4. [key]: value this can only be accessed using [key]

console.log(JSuser.email);
console.log(JSuser['email']);
console.log(JSuser.Full_Name);
console.log(JSuser["Full_Name"]);
console.log(JSuser["Full Name"]);
console.log(JSuser[num]);
console.log(JSuser["12"]);
console.log(JSuser[12]);


console.log(JSuser.mySym);// Jsuser.mySym is of string type(not used as symbol) when no []
console.log(JSuser[mySym]);// For using key as symbol
console.log(typeof mySym);
console.log(typeof JSuser[mySym]);

JSuser.email = "NIKK@legend.com"
console.log(JSuser);

// Object.freeze(JSuser)
JSuser.email = "NIKK@micro.com"

console.log(JSuser);

JSuser.greeting = function g1(){
    console.log("Hello Js user");
}
JSuser.greeting2 = function g2(){
    console.log(`Hello Js user, ${this.name}`);
}
JSuser.greeting()
JSuser.greeting2()

console.log(JSuser);




