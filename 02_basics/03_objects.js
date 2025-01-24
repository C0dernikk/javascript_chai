// Singleton (Not created using literals and created using constructor)

// Object.create --> using constructor

// Object Literals  (The only difference is of Singleton)

const mySym = Symbol("123")
const JSuser = {
    name: "Nikhil",
    "Full Name": "Nikhil Gupta",//Can't be accessed through '.' operator
    age: 21,
    [mySym]: "NewKey",// For using key as a symbol
    email: "xyz@india.com",
    location: "Bhagalpur",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Wed"]
}

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser["Full Name"]);
console.log(JSuser.mySym);// Jsuser.mySym is of string type(not used as symbol) when no []
console.log(JSuser[mySym]);// For using key as symbol
console.log(typeof mySym);
console.log(typeof JSuser.mySym);

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




