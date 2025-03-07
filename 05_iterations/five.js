const coding = ['js', 'ruby', 'python', 'cpp']
// callback is needed for forEach
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//    console.log(item);
   
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)//Provide the reference as parameter

// forEach has access to 3 parameters (item, index, arr)
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: 'Javascript',
        languageFile: 'js'
    },
    {
        languageName: 'Python',
        languageFile: 'py'
    },
    {
        languageName: 'C++',
        languageFile: 'cpp'
    }

]

myCoding.forEach( (item) => {
    for (const key in item) {
      console.log(`${key} = ${item[key]}`);
    }
})

