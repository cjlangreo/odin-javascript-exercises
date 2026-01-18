const palindromes = function (palindrome) {
  let result = "";
  let punctuations = [];

  console.log(palindrome.toLowerCase())
  for(let i = palindrome.length - 1; i >= 0; i--){
    let currentLetter = palindrome[i]

    if(["!", ".", ",", " "].includes(currentLetter)) {
      punctuations.push([currentLetter, i])
      continue
    }
    result += currentLetter
  }

  console.log(`before punctuations: ${result.toLowerCase()}`)
  console.log(punctuations)
  punctuations.reverse().forEach((item, index) => {
    result = result.slice(0, item[1]) + item[0] + result.slice(item[1])
  })
  console.log(`after punctuations: ${result.toLowerCase()}`)

  return result.toLowerCase() === palindrome.toLowerCase();
};

const text = "A car, a man, a maraca."
palindromes(text)


// Do not edit below this line
module.exports = palindromes;
