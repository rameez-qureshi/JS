// CHAPTER 02 - Question 01
let age;
age = 9;
if(age<10){console.log("Age is less than 10")}
else if(age==10 && age>=10){console.log("Age is 10")}
else if(age>10 && age<12){console.log("Age is 11")}
else if(age>11 && age<13){console.log("Age is 12")}
else if(age>12 && age<14){console.log("Age is 13")}
else if(age>13 && age<15){console.log("Age is 14")}
else if(age>14 && age<16){console.log("Age is 15")}
else if(age>15 && age<17){console.log("Age is 16")}
else if(age>16 && age<18){console.log("Age is 17")}
else if(age>17 && age<19){console.log("Age is 18")}
else if(age>18 && age<20){console.log("Age is 19")}
else if(age<=20 && age==20){console.log("Age is 20")}
else{console.log("Age is greater than 20")}

// CHAPTER 02 - Question 02
//use of switch case statement we already use SWITCH CASE STATEMENT
console.log("")

// CHAPTER 02 - Question 03
let num = 15;
let div = num%2;
let div1 = num%3;
if( div==0 && div1==0 ){
    console.log( num, "is divisible by both 2 and 3")
}
else{
    console.log( num, "is not divisible by both 2 and 3")
}
console.log("")

// CHAPTER 02 - Question 04
let number = 17;                 // 17 is not divisible by both
// let d = number%2;
// let d1 = number%3;
if( number%2==0 ){
    console.log( number, "is divisible by 2")
}
else if( number%3==0 ){
    console.log( number, "is divisible by 3")
}
else{
    console.log( number, "is not divisible by 2 and 3")
}
console.log("")

// CHAPTER 02 - Question 05

let aage = 19
let aa = aage > 18 ? "You can drive" : "You cannot drive"    // TERNARY OPERATOR METHOD
console.log(aa)

// let agee = 20;
// console.log("You can", ( agee>18? "drive": "not drive"))     // SAME THING WTH DIFF METHOD