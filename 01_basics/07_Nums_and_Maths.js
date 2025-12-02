const score = 40
// Automatically determined that it is a number
console.log(score)
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);// String prototypes being used by converting
console.log(balance.toFixed(3));// n digits after decimal places works like (fixed + setprecision of c++)
const otherNum = 123.873
console.log(otherNum.toPrecision(3));// n significant digits like setprecision of c++
const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'));
// We can have everything about numbers by 'Number._____'
console.log(Number.MAX_SAFE_INTEGER);


// ********************************** MATHS ***********************

console.log(Math);// View all properties in console
console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4, 7, 2, 0));
console.log(Math.max(5, 8, 37, 3));
console.log(Math.random());// [0,1) -- (random values)
console.log(Math.floor(Math.random()*10) + 1);// 1 to 10

const min = 10
const max = 20
// To generato random nums between this range
console.log(Math.floor(Math.random() * (max - min + 1)) + min)









