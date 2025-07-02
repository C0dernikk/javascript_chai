// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(greet);
}

// Maps
 
const map = new Map()
map.set('IN', "India")
map.set('US', "United states of America")
map.set('AU', "Australia")
map.set(1, 35)
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}
//Maps store the entries(key, value) and hence for of is working
// Works on iterable objects - string, array, set, map
const myObj = {
    "game1": "NFS",
    "game2": "FIFA",
    "game3": "VALO"
 }
 
// Objects are not iterable

//  for (const [key, value] of myObj) {
//     console.log(key);
//  }


