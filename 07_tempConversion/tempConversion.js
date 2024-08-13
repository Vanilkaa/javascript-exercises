const convertToCelsius = function(temp) {
    let celsius = (temp - 32) * 5/9;
    if(celsius % 1) {
        return +celsius.toFixed(1);
    }
    return Math.floor(celsius);
};

const convertToFahrenheit = function(temp) {
    let fahrenheit = temp * 9/5 + 32;
    if(fahrenheit % 1) {
        return +fahrenheit.toFixed(1);
    }
    return Math.floor(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
