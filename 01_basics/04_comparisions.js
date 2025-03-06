// console.log(2 == 2);
// console.log( 2 != 5 );
// console.log( 3 > 5 );
// console.log( 3 >= 7);
// console.log( 3 <= 9);
// console.log( 1 < 3 );

console.log( "2" == 2 );// not predictable output and hence we should avoid comparing different datatypes
console.log( "03" > 2 );// TypeScript does not allow this type of comparisions

console.log(null > 0 );
console.log( null == 0 );
console.log( null >= 0 );
// The reason is that an equality check and comparisions work differently, comparisions convert null to a number treating as 0
console.log( undefined > 0 );
console.log( undefined < 0 );
console.log( undefined == 0 );

// We avoid ambigiuos types of comparisions for clean code
// === Strict Check
console.log( "2" === 2 );















