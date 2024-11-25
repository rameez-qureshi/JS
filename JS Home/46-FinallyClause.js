const f = () => {
    try {
            let a = 0;
            console.log(program)
            console.log("Program ran successfully")
            return
    }
    catch (err) {
            console.log("This is an error")
            // console.log(p)
    }
    finally {                                   // if also some error in catch - i.e we use finally clause
            console.log("I am a good boy")         // finally code executed hoga chahay kuch bhi error ho

            // Close the file      // eg of code we use in final keyword
            // Exit the Loop
            // Write to the log file
    }
}

f()
console.log("End")