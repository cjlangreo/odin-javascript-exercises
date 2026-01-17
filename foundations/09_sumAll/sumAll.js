const sumAll = function(num1, num2) {
  let sum = 0;


  if ([num1, num2].find(
    num => num < 0 ||
    typeof(num) != 'number' ||
    num % 1 !== 0
  )) return "ERROR"
  
  
  if(num2 > num1){
    for(let i = num1;i <= num2;i++){
      sum += i;
    }
  } else if (num1 > num2){
    for(let i = num2; i<= num1; i++){
      sum += i;
    }
  } else return 0;

  return sum
};

console.log(sumAll(-10, 4))

// Do not edit below this line
module.exports = sumAll;
