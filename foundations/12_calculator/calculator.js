const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(numArray) {
  let sum = 0;
  numArray.forEach(num => sum += num)
  return sum;
};

const multiply = function(numArray) {
  let product = 1;
  numArray.forEach(num => product *= num)
  return product
};

const power = function(num1, num2) {
	let powerProduct = 1;
  for(let i = 0; i < num2; i++){
    powerProduct *= num1
  }
  return powerProduct
};

const factorial = function(num) {
  let factorialProduct = 1;
  for(let i = num; i > 0; i--){
    factorialProduct *= i
  }
  return factorialProduct
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
