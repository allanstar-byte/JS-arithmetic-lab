const { parse } = require("path");

function add() {
    // we'll fill this in shortly
  }

  function subtract(a,b) {
      return a - b
  }

  function multiply(a, b) {
    return a * b
  }
  function divide(a, b) {
    return a / b
  }
  function add(a, b) {
    return a + b;
  }

//n = 5
function increment(n) {
      return (n+=1);
  }

 function decrement(n) {
    return (n-=1);
}

function makeInt(string) {
    return parseInt(string, 10)
}

function preserveDecimal(string) {
    return parseFloat(string, 10)
}

add(1, 2)  
subtract(2,1)
multiply(2, 3)
divide(10,2)
makeInt("2")
preserveDecimal("2.9999999")