function sayMyname(){
console.log("N");
console.log("I");
console.log("K");
console.log("K");
}
// sayMyname--> Reference of function

// sayMyname()//Call or Execution

// function addTwoNum(number1, number2) {
    
//     console.log(number1 + number2);
// }
function addTwoNum(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2 
}

const result = addTwoNum(3,4)
console.log("Result: ", result);

function loginUserMessage(username="default"){   if(username === undefined){//!username--> since undefined is treated as false
   console.log("Please enter a username");
   return
}
    return `${username} just logged in`
}

let res = loginUserMessage()// if not passed then act as undefined
console.log(res);


function calculateCartPrice(val1, val2, ...num1){// Rest and Spread operator
return num1
}
console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    username: "Nikhil",
    price: 9999
}
function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "Flash",
    price: 3999
})
const myArr = [39, 393, 94, 20, 202]

function returnSecondValue(Array){
    return Array[1]
}
console.log(returnSecondValue(myArr));
console.log(returnSecondValue([10, 11, 12]));

