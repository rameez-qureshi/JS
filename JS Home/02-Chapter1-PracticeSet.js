
// CHAPTER 01 - Question 01
let a = "Rameez";
let b = 10;
console.log(a+b);

// CHAPTER 01 - Question 02
console.log( typeof (a+b) );

// CHAPTER 01 - Question 03
const x = {                        // create a new object
    name : "Rameez",
    section : "1B",
    class : 14 ,
}
console.log(x)
// x = 45;                         // cannot possible to change constant variable value
x['section'] = "2B";               // change value of any key
console.log(x)

// CHAPTER 01 - Question 04
x['semester'] = "3rd";             // add new key in object
console.log(x)

// CHAPTER 01 - Question 05
const dict = {                     // create a new object act as dictionary
    H : "hello",
    B : "bye",
    GL : "Good Luck",
}
console.log(dict['H'])
console.log(dict.B)              // another syntex to print