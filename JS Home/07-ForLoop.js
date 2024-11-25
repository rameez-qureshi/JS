
for( let i = 0 ; i < 10 ; i++ ){
    // console.log(i)
}

let sum = 0;
let n = 4;
for( let i = 0 ; i < n ; i++ ){  //           T                T 1             T 2             T 3      T 4-False
    sum = sum + ( i + 1 )        //      0+(0+1)=1       1+(1+1)=3       3+(2+1)=6       6+(3+1)=10
    // console.log(sum)             //              1               3               6               10
}
console.log("The sum of first " + n + " natural number is " + sum)

// F O R  I N  L O O P

const obj = {
    ali: 90,
    saim:80,
    waqas:67,
    sameed:23,
    irtiza:12,
}
for ( let a in obj ){        // FOR IN LOOP print object keys
    console.log(a)
}
for ( let a in obj ){        // FOR IN LOOP print object keys with values
    console.log( "Marks of " + a + " are " + obj[a] )
}

// F O R  O F  L O O P


for ( let b of "HILUX" ){        // FOR Of LOOP actually use in arrays we do later
    console.log(b)
}