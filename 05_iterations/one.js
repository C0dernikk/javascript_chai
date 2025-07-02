//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        // console.log("5 is reached");
        
    }
    // console.log(index);
    
}

for(let i = 1; i <= 5; i++){
    console.log(`Outer loop value: ${i}`);
    
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner looop value: ${j}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

let myArray = ["flash", "batman", "superman"]
for(let index = 0; index < myArray.length; index++){
    console.log(myArray[index]);
    
}// Out of bound access gives undefined and not error

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        // break
        continue
    }
    console.log(`Value of i is ${index}`);
    
}



