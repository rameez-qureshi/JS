//   Chapter 4 - Question 01

let str = "Hii\"";           // length is 4 bcz ESCAPE SEQUENCE CHARACTER is LENGTH = 1.
console.log(str.length)

//   Chapter 4 - Question 02
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'foxes';
console.log(sentence.includes(word))
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//   Chapter 4 - Question 03
let name = "RAMEEZ";
console.log(name.toLowerCase());

//   Chapter 4 - Question 04
let amount = " Give me 10000rs"
console.log(amount.slice(" Give me ".length ));
console.log(amount.slice( 9 , 14 ));
amount = Number.parseInt(amount);
console.log(typeof amount);

//   Chapter 4 - Question 05
let car = "TOYOTA"
car[3] = "R"               // not changed, because string is immutable and this syntax not giving error
console.log(car)