const fibonacci = function(index) {
  if(+index < 0) return "OOPS"

  let previousNumber = 0;
  let currentNumber = 1;

  for(let i = 0; i < index; i++){
    previousNumber = previousNumber + currentNumber, (previousNumber = currentNumber)   
    console.log(`previous number: ${previousNumber}`)
    console.log(`current number: ${currentNumber}`)
  }


};

// Do not edit below this line
module.exports = fibonacci;
