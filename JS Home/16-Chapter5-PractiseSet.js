// CHAPTER 05 - QUESTION 01                 // add 1 element in array

let arr = [ 1, 2, 3, 4, 5]
// let a = prompt("Enter a number")     // prompt not work in VsCode
// a = Number.parseInt(a)
let a = 10
arr.push(a)
console.log(arr)

// CHAPTER 05 - QUESTION 02                 // take input and print in array
// let arr2 = []
// let b
// do{
//     b = prompt("Enter a number")     // prompt not work in VsCode -- so this code give error
//     b = Number.parseInt(b)
//     arr.push(b)
// }while( b != 0 )
// console.log(arr2)

// CHAPTER 05 - QUESTION 03                 // print element that divisible by 10
let arr3 = [10, 23, 20, 34, 50, 65, 70]

let Divby10 = (value) => {
    return (value%10) == 0
}
let c = arr3.filter(Divby10)
console.log(c)

// CHAPTER 05 - QUESTION 04                 // print squares of element
let arr4 = [ 2, 4, 6, 8, 10 ]

let Sqrs = (element) => {
    return element * element
}
let d = arr4.map(Sqrs)
console.log(d)

// CHAPTER 05 - QUESTION 05                 // print factorial of 1st ten Natural no
let arr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let e = arr5.reduce((e1,e2) => {
    return e1 * e2
})
console.log(e)