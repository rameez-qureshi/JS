
// TEMPLATE LITERALS
let f1 = "John";
let f2 = "Alex";
let StringLiteral = `${f1} is a friend of ${f2}`;    // we use backticks ` to print like that
console.log(StringLiteral)
console.log("")

// ESCAPE SEQUENCE CHARACTER

//   \b	Backspace :  \f	Form Feed :  \n	New Line :  \r Carriage Return :  \t Horizontal Tabulator :  \v	Vertical Tabulator
//   \`   \'   \"   \r

// S T R I N G S

let A = "Muhammad Rameez Qureshi";         // we cant change STRING in JS
console.log(A[5]);
console.log(A[10]);
console.log( A[0] + A[9] + A[16] );
console.log("")

console.log(A.length);                     // this is a property
console.log(A.toUpperCase());              // this is a method
console.log(A.toLowerCase());
console.log(A.slice( 0 , 8 ));
console.log(A.slice( 9 ));                 // means ( 9 , end )
console.log(A.replace("Rameez","Ramiz"));

let a = "Rameez";
let b = "Qureshi";
console.log(b.concat(" is a cast of ", a , " ... . alright?"))

let c = "         Mubbi       ";
console.log(c)
console.log(c.trim())                      // remove useless spaces
