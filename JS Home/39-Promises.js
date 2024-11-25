
//promises use instant of callback - promises use if code not wrk then notify and execute code further

let promise1 = new Promise(function(resolve, reject) {       // create promise
    console.log("Hello")
    resolve(56)
})
let promise2 = new Promise((resolve, reject)=> {              // default promise
    console.log("I am a promise2 and I am resolved")
    
})
let promise3 = new Promise((resolve, reject) => {
            console.log("I am a promise3 and I am resolved")           // FOR RESOLVE
            resolve(true)
})
let promise4 = new Promise((resolve, reject) => {
    console.log("Promise4 is pending")
    setTimeout(() => {                                                 // FOR ERRORS
            console.log("I am a promise4 and I am giving error")
            reject(new Error("promise 4 is error"))
    }, 1000)
})
console.log(promise4)

// To get the value
promise3.then((value) => {
    console.log(value)
})

// To catch the errors
promise4.catch((error) => {
        console.log("some error occurred in p2")
})

promise4.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})

// PROMISES CHAINING  
console.log(" ");

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Resolved after 2 seconds")
            resolve(56)
    }, 5000)
})

p1.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve("Promise 2") }, 2000)
    }) 
}).then((value) => {
    console.log("We are done")
    return 2
}).then((value)=>{
    console.log("Now we are pakka done")
})