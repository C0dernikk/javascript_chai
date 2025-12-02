const name = " Nikhil"
const repoCount = 5
console.log( name + repoCount + " value" );
// Above is old way of concantenating and is outdated

//Use of backticks and String Interpolation --> Insert variables or expressioins directly into string using ${}

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Coder-nikk-master') 
// Stored as key value pair
// This is a string object, both have access to methods but primitive one coverts into object if methods are used by autoboxing

// Both string object and primitive string are immutable there content cannot be changed, in case of string object there reference is stored in a stack but string is present in heap

// In string objects only property can be added or deleted and modified
// For modifying some string's content make a new one
console.log(typeof gameName);

console.log(gameName);
console.log(name.trim());// Methods used for primitive string

console.log(name[2]);
console.log(gameName[2]);
console.log(gameName.__proto__.__proto__);
console.log(gameName.__proto__);
console.log(Object.getPrototypeOf(gameName));

console.log(gameName.length);
console.log(gameName.toUpperCase());
// Here as they are objects they should have been mutable as stored in Heap but this does not happens in case of String object as both String primitives(stored in stack) and String Object(stored in Heap) are immutable for performance reasons as are heavily used
console.log(gameName);
console.log(gameName.at(-4));
console.log(gameName.charAt(4));
console.log(gameName.indexOf("e"));
//Js uses these
// .at() -- can take negative indexes too
// [index]
// .charAt() (strings only)
// .valueOf() (convert object → primitive)

const newString = gameName.substring(0,5);
console.log(newString);
const anotherString = gameName.slice(-8,11);// If start index > end index then we get empty string
console.log(anotherString);
const newStringOne = "    Irrelevant Spaces      "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());

const url = "https://nikhil.com/nikk%20gupta"

console.log(url.replace('%20', '-'))
console.log(url.includes('gupta'));
console.log(gameName.split('-'));

//All uses of split 

// ✅ Basic Syntax
// string.split(separator, limit)


// separator → pattern where string should break

// limit → optional; max number of items to return

// 🔥 1. Split by space

let splitt1 = "hello world";
let result = splitt1.split(" ");

console.log(result); 
// ["hello", "world"]

// 🔥 2. Split every character

let splitt2 = "hello";
let chars = splitt2.split("");

console.log(chars);
// ["h", "e", "l", "l", "o"]

// 🔥 3. Split by comma

let data = "a,b,c,d";
console.log(data.split(","));
// ["a", "b", "c", "d"]

// 🔥 4. Split using multiple characters

let splitt3 = "apple--banana--mango";
console.log(splitt3.split("--"));
// ["apple", "banana", "mango"]

// 🔥 5. Split using regex (powerful)

// Split by any amount of spaces:

let splitt4 = "hello   world  js";
console.log(splitt4.split(/\s+/));
// ["hello", "world", "js"]


// Split by comma OR semicolon:

let splitt5 = "a,b;c,d";
console.log(splitt5.split(/[,;]/));
// ["a", "b", "c", "d"]

// 🔥 6. Limit the number of splits

let splitt6 = "a,b,c,d";
console.log(splitt6.split(",", 2));
// ["a", "b"]

// 🔥 7. Split and remove empty values

// "hello,,world".split(",");
// ["hello", "", "world"]


// To remove empty values:

// "hello,,world".split(",").filter(Boolean);
// ["hello", "world"]

// 🔥 8. Common use: Convert string to array and join later

let splitt7 = "hello";
let arr = splitt7.split("");
arr[0] = "H";
splitt7 = arr.join("");

console.log(splitt7); // "Hello"

// 🧠 Key Points
// ✔ If separator is a string → split at exactly that string
// ✔ If separator is a regex → can split by patterns
// ✔ If separator is an empty string → split every character
// ✔ limit controls how many elements you get
// ✔ Original string is not modified (strings are immutable)





























