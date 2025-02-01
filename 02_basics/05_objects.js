//Destructuring of Objects

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor--> Instead of using this 

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {
// Destructuring used in React
// }
// navbar(company = "hitesh")

//JSON(Javascript Object Notation)--> Used to store and send object(eg.api)

// Object with no name --> API

// {
// "name": "nikk",
// "gender": "Male"
// }

//Array mai bhi ho sakta hai --> APIs
// [
//     {},
//     {},
//     {}
// ]










