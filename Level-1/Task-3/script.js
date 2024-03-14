function convertTemperature() {
  var temperatureInput = document.getElementById('temperature').value;
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit = document.getElementById('toUnit').value;
  var resultElement = document.getElementById('convertedTemperature');

  if (isNaN(temperatureInput)) {
    resultElement.value = 'Please enter a valid number for temperature.';
    return;
  }

  temperatureInput = parseFloat(temperatureInput);

  var convertedTemperature;
  switch (fromUnit) {
    case 'celsius':
      switch (toUnit) {
        case 'fahrenheit':
          convertedTemperature = (temperatureInput * 9/5) + 32;
          break;
        case 'kelvin':
          convertedTemperature = temperatureInput + 273.15;
          break;
        default:
          convertedTemperature = temperatureInput;
      }
      break;
    case 'fahrenheit':
      switch (toUnit) {
        case 'celsius':
          convertedTemperature = (temperatureInput - 32) * 5/9;
          break;
        case 'kelvin':
          convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
          break;
        default:
          convertedTemperature = temperatureInput;
      }
      break;
    case 'kelvin':
      switch (toUnit) {
        case 'celsius':
          convertedTemperature = temperatureInput - 273.15;
          break;
        case 'fahrenheit':
          convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
          break;
        default:
          convertedTemperature = temperatureInput;
      }
      break;
    default:
      convertedTemperature = temperatureInput;
  }

  resultElement.value = convertedTemperature.toFixed(2) + ' ' + toUnit;
}

function resetFields() {
  document.getElementById('temperature').value = '';
  document.getElementById('fromUnit').selectedIndex = 0;
  document.getElementById('toUnit').selectedIndex = 0;
  document.getElementById('convertedTemperature').value = '';
}