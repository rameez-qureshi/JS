  const hello = () => {
    console.log(" Hey how are you. I am fine ")  // console.log print everytime when call function
    return "hi"                                  // return cannot print when we call function without console.log
  }
  //            methods to call function // -- console.log(hello()); -- hello(); --
  

  function onePlusAvg(x, y) {                 // 2 methods to write functions in javascript
    return 1 + (x + y) / 2;
  }
  
  const sum = (p, q) => {   // Arrow method   // professionals use this method to write function
    return p + q;
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  let v = hello();
  console.log(v);

  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  console.log( b, "+", c, "=", sum(b, c))
  hello();                   // this cannot print return statement bcz we not use console.log 