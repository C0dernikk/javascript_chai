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

console.log(gameName.charAt(4));
console.log(gameName.indexOf("e"));
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




























