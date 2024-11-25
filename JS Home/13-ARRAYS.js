
// A R R A Y S
let num = [ 1, 2, 3, 45, 100, false, "asas"]
console.log(num)
console.log(num[3])
num[7] = 67            // add element in array
num[0] = 10            // add element in array
console.log(num[7])
console.log(num)
console.log( "The length of ARRAY is " ,num.length)
console.log( "The typeof of ARRAY is " ,typeof num)
console.log("")

// ARRAY METHODS
let numb = [10, 2, 3, 34, 4]
let x = numb.toString()         // numb is now a string 
console.log(x, typeof x)
let y = numb.join("-")          // join elements of array
console.log(y, typeof y)

let r = numb.pop()              // pop remove the last element
console.log(numb, r)            // r returns the popped element
let rr = numb.push(56)          // push add the new element in last
console.log(numb, rr)           // rr returns the array length

let rrr = numb.shift()          // Removes an element from the start of the array
console.log(numb , rrr)         // rrr returns the removed element
let xyz = numb.unshift(78)      // add an element from the start of the array
console.log(numb , xyz)         // xyz returns the array length

console.log(numb)
console.log("")

// MORE ARRAY METHODS
let n = [ 13, 2, 23, 4, 44]
delete n[0]                     // delete can empty the index doesnot effect on length
console.log(n.length)
console.log(n)

let newArray = n.concat(numb)   // merge both arrays "n" and "numb"
console.log(newArray)

n.sort()                        // sort original array in alphabetic order
n.reverse()                  // reverse the original array
console.log(n)
console.log("")

// FUNCTION IN SORT METHOD

let compare = ( a , b ) => {              // sort in ascending order function
    return a - b
}
// let compare = ( b , a ) => {           // sort in decending order function
//     return b - a
// }
n.sort(compare)
console.log(n)
console.log("")

// REVERSE, SPLICE & SLICE
let numm = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                                                                // new elements = LengthOfChangeableIndex
let deletedValues = numm.splice(1, 2, 1024, 1025)  // ( StartIndex , LengthOfChangeableIndex , NewElements, NewElements )
console.log(numm)
console.log(deletedValues)

let newNumm = numm.slice(3)                        // print index 3 to end
let newNummm = numm.slice(3, 5)                    // print index 3 and 4
console.log(newNumm)
console.log(newNummm)