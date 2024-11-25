
// CHAPTER 03 - Question 01
obj = { 
    Ali : 45 ,
    Saim : 23 ,
    Irtiza : 45 
}

for( let i = 0 ; i < Object.keys(obj).length ; i++ ){
    console.log("Marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])
    
}

console.log("")
// CHAPTER 03 - Question 02

for( let a in obj ){
    console.log("Marks of " + a + " are " + obj[a] )
}

console.log("")
// CHAPTER 03 - Question 03 is in HTML file

// CHAPTER 03 - Question 04
const mean = ( a, b, c, d ) => {
    return ( a + b + c + d ) / 4 
}
console.log( mean( 4, 5, 6, 7 ) )
