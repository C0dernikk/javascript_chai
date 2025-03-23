// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());

console.table([myDate.toISOString(), myDate.toJSON(), myDate.toLocaleDateString('en-IN'), myDate.toLocaleString(), myDate.toLocaleTimeString(), myDate.toTimeString(),myDate.getTimezoneOffset()]);

console.log(typeof myDate);

let myCreatedDate = new Date(2004, 0, 1)// More parameters can be added to have time(2025, 0, 22, 10, 59) --> order (YYYY, MM[0,11], DD)
let createdDate1 = new Date("2024-01-25")
let createdDate2 = new Date("03/16/2025")
console.log(myCreatedDate.toDateString());
console.log(createdDate1.toDateString());
console.log(createdDate2.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate1.getTime());
console.log(Math.floor(Date.now()/1000));
 
let newDate = new Date()
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());

let formatedDate = newDate.toLocaleString('default',{
    weekday: "long",
    timeZoneName: "long"
})

console.log(formatedDate);












