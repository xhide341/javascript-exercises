const convertToCelsius = function(farenheit) {
  let result = (farenheit - 32) * 5/9;
  return result = checkResult(result);
};

const convertToFahrenheit = function(celcius) {
  let result = (celcius * 9/5) + 32;
  return result = checkResult(result);
};

function checkResult(result) {
  if (Number.isInteger(result)) {
    return Math.round(result);
  } else {
    return parseFloat(result.toFixed(1));
  }
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
