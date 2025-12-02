"Use strict";

// this in global space

console.log(this) // globalObject - window, global

// this inside a function

function x(){
    // the value of this depends on strict / non strict mode
    console.log(this);
}

// this inside non strict mode - (this substitution)

// If the value of this keyword is undefined or null,
// then this keyword will be replaced by globalObject (only for non strict mode)
x(); // undefined
// window.x(); // window

// this inside a object's method

const student = {
    name: "Nikhil",
    printName: function (){
        console.log(this.name);
    }
};

student.printName();

const student2 = {
    name: "snow"
};

// call, apply, bind methods(sharing methods)

student.printName(student2); // value of this will be of student2

// this inside a arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this);
    }
};

obj.x();

//this inside a nested arrow fuction

const obj2 = {
    a: 20,
    x: function() {
        // enclosing lexical context
        const y = () => {
            console.log(this);
        }
        y();
    }
};

obj2.x();



// summary Gpt -

// 🔵 1. Node.js is NOT truly global — every file is wrapped

// Node wraps each file inside a function:

// (function (exports, require, module, __filename, __dirname) { ... });


// This wrapper creates a module scope, not a global scope.

// 🔵 2. Top-level this in a Node file

// Inside the wrapper, this refers to:

// module.exports


// Therefore:

// console.log(this); // {}

// 🔵 3. Arrow functions DO NOT have their own this

// They use lexical this (inherited from enclosing scope).

// Since enclosing scope = wrapper → this = {}.

// So:

// const f = () => console.log(this); // {}

// 🔵 4. Regular functions DO have their own this

// this depends on how the function is called, not where it's defined.

// A plain function call (fn()) triggers default binding.

// 🔵 5. Default Binding (Non-Strict Mode)

// When calling a regular function:

// function fn() { console.log(this); }
// fn();


// this becomes the global object:

// this = global

// 🔵 6. Regular functions in strict mode

// With "use strict" inside the function:

// function fn() {
//   "use strict";
//   console.log(this);
// }
// fn();


// Output:

// undefined

// 🔵 7. Arrow functions ignore default binding

// They simply use the this of the wrapper → {}.

// Even strict mode doesn’t change arrow functions’ this behavior.

// 🔵 8. Browser vs Node.js

// Browser:

// this === window


// (Top-level this == global)

// Node:

// this === module.exports   // {}


// (Top-level this != global)

// 🔵 9. REPL behaves differently than Node files

// In Node REPL:

// this === global  // true


// But in Node files:

// this === {}      // module.exports

// 🔵 10. globalThis

// globalThis is the universal global object.

// Browser: globalThis === window

// Node: globalThis === global

// ⭐ FINAL SUPER-SHORT SUMMARY

// Node files run inside a wrapper → top-level this = {}

// Arrow functions inherit wrapper this → {}

// Regular functions get global object via default binding → global

// Strict mode removes default binding → undefined

// Browser top-level this = window

// Node top-level this ≠ global