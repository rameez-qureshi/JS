
console.log("Hacking wifi.... Please wait...");

  try {           
    // setTimeout(() => {            // In try-catch schedule code not working - eg: setTimeout function
    // }, 2000);                     //we use try-catch inside setTimeout function
    console.log(rahul);               // rahul is not defined so this gives an error
  } catch (err) {
    console.log("Balle balle");       // this not give error
  }
  setTimeout(() => {
    console.log("Hacking Rahul's facebook id.... Please wait...");
  }, 3000);