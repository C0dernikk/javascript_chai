let a = 300
// var c = 150 
if(1){
   let a = 10
   const b = 20
   var c = 30
   console.log("INNER: ", a);
   
}
console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "NIKHIL"
    function two(){
    const website = "GITHUB"
    console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "nikhil"
    if(username === "nikhil"){
        const website = " x"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ********************* Interesting *****************

addOne(4)// Execution before declaration possible
function addOne(num){
return num + 1
}

//Declaration and holding into a varible

// addTwo(7) --> Not possible
const addTwo = function(num){
    return num + 2
}




