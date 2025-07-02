// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task one completed');
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log('PromiseOne done');
// })

// // Without storing in variable 
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task two completed');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log('PromiseTwo done');
    
// })

// //Passing and retreving data

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:'nikk', email:'example@hotmail.com'});
//     }, 1000)
// })

// promiseThree.then(function(obj){
// console.log(obj);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:'Nikk', email:'example@hotmail.com'})
//         } else{
//             reject('ERROR Occured')
//         }
//     }, 1000)
   
// })

// promiseFour
// .then((user) => {
//   console.log(user);
//   return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log('The promise is either resolved or rejected'))

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"javascript", password:"123"})
//         } else{
//             reject('Error: JS went wrong!')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try{const response = await promiseFive
//     console.log(response);}
//     catch (error){
//         console.log(error); 
//     }
// }

// consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const  response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();// response.json() is a time taking process and hence use await, if not used no values will be printed
//     console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
        
//     }
// }

//Json.parse()--> Used when we have a json string to convert into Js object(synchrounus)
//response.json()--> Used for reading response body came from fetch(), and thereby parse into Js object asynchronously

// getAllUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log('Error in fetch'));

//Consuming more than one promise at once

function fetchPostData(){
    return new Promise(function (resolve, reject){
       setTimeout(function(){
           resolve("Post data fetched!")
       }, 3000)
    })
}

function fetchCommentData(){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve("Comment data fetched")
       }, 4000)
    })
}

 async function fetchBlogData(){
     try {
        console.log(`Fetching blog data`);
        // const postData = await fetchPostData()
        // const commentData = await fetchCommentData()
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(postData);
        console.log(commentData);
        console.log(`Fetch complete`);
        
        
        
     } catch (error) {
         console.log(`Error fetching blog data`);
         
     }
}
fetchBlogData()