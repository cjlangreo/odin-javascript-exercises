const reverseString = function(string) {
  let finalString = "";
  for(let i = 0; i < string.length; i++){
    finalString += string.at(-i -1)
  }
  return finalString
};

// Do not edit below this line
module.exports = reverseString;
