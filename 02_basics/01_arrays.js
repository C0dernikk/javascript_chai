const myArr = [0, 1, 2, 3, 4, 5]
//It can have multiple datatypes in same array, are not associative(cannot be accessed using arbitrary keys), make shallow copies(same reference), resizeable
Heros = ["Batman", "IronMan", "Bheem"]
const myArr2 = new Array(4, 6, 77)
console.table([Heros, myArr, myArr2]);
//Array methods
console.log(myArr);
myArr.push(37)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(4)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(3));
console.log(myArr.at(0));

const newArr = myArr.join('-')// converts to string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice, Splice

console.log("A ", myArr);
const myn1 = myArr.slice(-4,-2)// does not include 3( stores from 1 to 2), slice can have negative values
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)// includes 3 and changes original array(deletes this range)--> because it takes count as 2nd parameter
console.log("C ", myArr);
console.log(myn2);


















