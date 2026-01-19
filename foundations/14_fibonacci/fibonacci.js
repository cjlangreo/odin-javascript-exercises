const fibonacci = function(index) {
  if(Number(index) < 0) return "OOPS"
  index = Number(index)
  // let previousNumber = 0;
  // let currentNumber = 1;
  let result = 0;

  // for(let i = 0; i < index; i++){
    // console.log(`previous number: ${previousNumber}`)
    // console.log(`current number: ${currentNumber}`)
// 
  // }
  result = Math.round(((1 + Math.sqrt(5)) ** index - (1 - Math.sqrt(5)) ** index) / (2 ** index * Math.sqrt(5)))

  return result


};

// Do not edit below this line
module.exports = fibonacci;
