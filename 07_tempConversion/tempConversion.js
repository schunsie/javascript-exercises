const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * 5/9;
  return roundToOneDecimal(tempCelsius);
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = tempCelsius * 9/5 + 32; 
  return roundToOneDecimal(tempFahrenheit); 
};

function roundToOneDecimal(float) {
  return Math.round(float * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
