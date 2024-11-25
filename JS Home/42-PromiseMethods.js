let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 1");
    }, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 2");
            // reject(new Error("Error"));
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 3");
    }, 3000);
});

p1.then((value) => {
        console.log(value)
})
p2.then((value) => {
        console.log(value)
})
p3.then((value) => {
        console.log(value)
})

// METHODS - Promise APIs

// let promise_all = Promise.all([p1, p2, p3])      // to view all promise result at once
let promise_all = Promise.allSettled([p1, p2, p3])  // if anyone promise error show remianing promise & not give error

// let promise_all = Promise.race([p1, p2, p3])   // ans of first solve promise - goto acsending
// let promise_all = Promise.race([p1, p2, p3])   // giver ans of last promise

// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))

promise_all.then((value) => {                   // make array of all promise value
    console.log(value)
})
