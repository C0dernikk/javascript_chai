//const tinderUser = new Object()--> Singleton object
const tinderUser = {}// --> Non singleton object

tinderUser.id = "2993nd"
tinderUser.name = "jonny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullName: {
            firstname: "NIKHIL",
            lastname: "GUPTA"
        }
    }
}
console.log(regularUser.fullname.userFullName.lastname);// ? is also used

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)// {}--> this will be treated as target

console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const users = [
    {
        id: 1,
        email: "xyz"
    },
    {

    },
    {

    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log((Object.entries(tinderUser)));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



