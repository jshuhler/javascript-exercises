const convertToCelsius = function(tempFar) {
  let convCel = (tempFar - 32)*(5/9);
  console.log(Math.round(convCel * 10) / 10);
};

const convertToFahrenheit = function(tempCel) {
  let convFar = (tempCel * (9/5)) + 32;
  console.log(Math.round(convFar * 10) / 10);
};

convertToCelsius(-100);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};