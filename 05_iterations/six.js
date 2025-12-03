const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach((item) => {
//     console.log(item);
    
// })
// console.log(values);
// Doesn't return values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const val = myNums.filter((item) => (item > 5))

// Mechanism:
// The callback returns a boolean (true/false) for each element

// filter() includes the element in the new array only if the callback returns true

// It doesn't return the booleans - it returns the values that passed the test

console.log(val);
console.log(typeof val);


//Using forEach

const newNums = []
myNums.forEach((item) => {
if(item > 5){
    newNums.push(item)
}
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((item) => (item.genre === 'History'))

//   userBooks = books.filter((item) => (item.publish >= 1990))
  console.log(userBooks);

  const myNumers = myNums
 
  const newNumers = myNumers.map((num) => (num+10))
  console.log(newNumers, myNumers);

  const chainedNum = myNumers.map((item) => (item * 10)).map((item) => (item + 1)).filter((item) => (item > 50))

  console.log(chainedNum);

//   const myTotal = myNumers.reduce(function (acc, currval){
//     console.log(`Acc: ${acc} and Currval: ${currval}`);
    
//     return acc + currval;
//   }, 1)
//   console.log(myTotal);

const myTotal = myNumers.reduce((acc, currval) => (acc + currval), 1)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Py course',
        price: 2999
    },
    {
        itemName: 'AI/ML',
        price: 9999
    },
    {
        itemName: 'MERN',
        price: 3999
    },
    {
        itemName: 'DSA',
        price: 4999
    }
]

let add_forof = 0, add_forin = 0, add_forEach = 0;

console.log(shoppingCart.reduce((acc, item) => (acc + item.price), 0))

for (const item of shoppingCart) {
    add_forof += item.price
}

for (const key in shoppingCart) {
    add_forin += shoppingCart[key].price
}

shoppingCart.forEach((item) => {
 add_forEach += item.price
})

console.log(add_forof, add_forin, add_forEach);

// Type	Use These Loops
// String	for, for…of
// Array	for, for…of, forEach, map, filter, reduce
// Object	for…in, Object.keys(), Object.entries()



  
  







  

  
  



