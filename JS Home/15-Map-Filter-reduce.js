
// A R R A Y  M A P  M E T H O D

                 // DIFFERENCE
// FOR EACH LOOP               // to perform any operation
// MAP                         // to make new array from old

let arr = [ 34, 56, 78, 90, 12];

arr.map((value) => {                // work same like forEach loop
    console.log(value)
})
console.log("1st End\n")

let a = arr.map((value) => {        // make new array with some changes
    return value + 1
})
console.log(a)
console.log("2nd End\n")

let b = arr.map(( value, index, array ) => {        // print ( element , indexOfElement , WholeArray )
    console.log( value, index, array )
    return value + index                            // make new array ( add index in element )
})
console.log(b)
console.log("3rd End\n")

// A R R A Y  F I L T E R  M E T H O D
let arr2 = [ 12, 7, 54, 3, 23, 9 ]

let f = arr2.filter((ValueLessthanTen) => {
    return ValueLessthanTen<10               // make new array with value less than 10 - old array not change
})
console.log(f)
console.log("4th End\n")

// A R R A Y  R E D U C E  M E T H O D
let arr3 = [1, 2, 3, 5, 2, 1]

let xyz = arr3.reduce ( ( e1 , e2 ) => {          // this function add all element and give result
    return e1 + e2
})
console.log(xyz)

// const reduce_func = (h1, h2) => {              // same thing with make method and add in a variable
//   return h1 + h2
// }
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3)