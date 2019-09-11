const logger = require("./lib/logger")

logger.info("Testing the logger right here!")
logger.error("And this is an erro!")


function test() {
    let a = 1,
        b = 2;

    return function () {
        console.log(a + b)
    }
}

let testFN = test();
testFN();

function test4(){
    fname = "Fernando";
    lname = "Doglio";
    
    const sayMyName = _ => {
        console.log(fname, lname)
    }

    console.log(fname, lname)
    return sayMyName
}


const fn = test4()
var fname = "Another First Name",
    lname = "Another Last Name";

fn()
