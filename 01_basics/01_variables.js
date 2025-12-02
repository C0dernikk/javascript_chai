const accountId = 144553
let accountEmail = "nikk@gmail.com"
var accountPass = "89328"
accountCity = "Thane"// this become an implicit global variable even if define inside block or function scope and will give error using strict mode, becomes property of global object window
let accountState;

// Var - Prefer not to use var because of issue in block scope, works fine with function scope, become property of global object window
accountEmail = "codernikk@gmail.com"
accountPass = "3892"
accountCity = "Bhagalpur"
console.log(accountId)
console.table([accountId, accountEmail, accountCity,accountPass, accountState])

