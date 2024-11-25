
num = [ 1, 2, 3, 4, 5]

for( let i = 0; i < num.length ; i++ ){    // Classic For Loop (same in every language)
    console.log(num[i])
}

// FOR EACH LOOP                           // help for making apps and web
num.forEach((element) => {
    console.log( element * element )       // print square of every array element
})

// FOR FROM LOOP                           // convert object(html collection) to array
let nam = "Rameez"
let arr = Array.from(nam)
console.log(arr)

// FOR OF LOOP                             // print element of array (Shortcut to print that)
for(let j of num){
    console.log(j)
}

// FOR IN LOOP
for(let item in num){
    // console.log(item)                         // print indexes of array
    // console.log(num[item])                    // print elements of array
    console.log(" index = ", item, ", Value = ", num[item])                      // print both
}