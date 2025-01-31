const user = {
    username: "nikhil",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);// For current context (this)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"// context change
// user.welcomeMessage()
// console.log(this);// Current context is empty but for browser there is a global object(window)

// function chai(){
//     let username = "nikhil"
//     console.log(this.username);
// }// Cant used in functions
// chai()

//Arrow function
const chai = () => {
    let username = "nikhil"
    console.log(this.username);
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } Explicit return

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
// Implicit return(No return required)-->

console.log(addTwo(3, 4))

//Object return

const returnObj = () => ({username: "NIKK"})
console.log(returnObj());

// Use in loops
const myArr = [2, 5, 1, 5]

// myArr.forEach(function () {})
// myArr.forEach(() => {})
// myArr.forEach(() => ())

