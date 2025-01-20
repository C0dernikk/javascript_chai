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

let givenNum = 77
let StringNum = String(givenNum)
console.log(typeof StringNum);
console.log(StringNum);








