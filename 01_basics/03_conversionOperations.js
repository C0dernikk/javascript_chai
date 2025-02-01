let score = "37"

// const {score} = req.body --> takes input in score but datatype is not clear to us

console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* "33" => 33 (Number)
   "33ab" => NaN (Number)
   "nikk" => NaN (Number)
    true => 1; false => 0 (Number)
    null => 0 (Object->Number)
    undefined => NaN (undefined->Number)
*/
let isLoggedIn = "nikk"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log( typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
// 1 => true, 0 => false, "" => false, "anycharOrString" => true
// (num->bool)                     (string -> bool)

let givenNum = 77
let bool = false
let boolString = String(bool)
let StringNum = String(givenNum)
console.log(typeof StringNum);
console.log(StringNum);
console.log(typeof boolString);
console.log(boolString);


// **********************  Operations ********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(4/2);
console.log(7%3);
console.log(2**3);

let str1 = "Hello"
let str2 = "Nikk"
let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log( 2 + 2 + "4");
console.log( "4" + 5 + 6);
console.log( 3 + 4 + "7" + 1);
// use parantheses and not think much about precedences
console.log( (3+7) * 4 % 7);

let num1, num2, num3
num1 = num2 = num3 = 7
let gameCounter = 10
console.log(++gameCounter);























