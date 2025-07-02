const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const all_heros = marvel_heros.concat(dc_heros)// Returns a new array
console.log(all_heros);

const spreaded_arr = [...marvel_heros, ...dc_heros]
console.log(spreaded_arr);// More convenient than concat

const mutlilevel_arr = [1, 2, 3, [6, 6, 8, [37, 43]], [11, 32,]]

const multi_flatted = mutlilevel_arr.flat(Infinity)// Depth should be given or infinity --> Glasses spreading out when broken
console.log(multi_flatted);

console.log(Array.isArray("NIKK"));
console.log(Array.from("NIKK"));
console.log(Array.from({name : "Nikhil"}));//Not directly convertable and gives empty array --> We have to declare how to make array by keys or value

let score1= 1
let score2 = 3
let score3 = 6
console.log(Array.of(score1, score2, score3));












