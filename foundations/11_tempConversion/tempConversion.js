const convertToCelsius = function(farenheit) {
  if(typeof(farenheit) != 'number') return "ERROR"
  
  return +((farenheit - 32 ) * (5 / 9)).toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  if(typeof(celsius) != 'number') return "ERROR"

  return +(celsius * (9 / 5) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
