const accountId = 144553
let accountEmail = "nikk@gmail.com"
var accountPass = "89328"
accountCity = "Thane"
let accountState;

// Prefer not to use var because of issue in block scope and functional scope
accountEmail = "codernikk@gmail.com"
accountPass = "3892"
accountCity = "Bhagalpur"
console.log(accountId)
console.table([accountId, accountEmail, accountCity,accountPass, accountState])

