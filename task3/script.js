function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultElement = document.getElementById("result");
    const errorMessage = document.getElementById("error-message");

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === "") {
        errorMessage.textContent = "Please enter a valid number.";
        resultElement.textContent = "";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature = "";
    let resultUnit = "";

    errorMessage.textContent = ""; // Clear previous error messages

    // Convert temperature based on selected unit
    if (unit === "Celsius") {
        convertedTemperature = `${((temperature * 9/5) + 32).toFixed(2)} °F (Fahrenheit), ${ (temperature + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (unit === "Fahrenheit") {
        convertedTemperature = `${(((temperature - 32) * 5/9).toFixed(2))} °C (Celsius), ${( ((temperature - 32) * 5/9 + 273.15)).toFixed(2)} K (Kelvin)`;
    } else if (unit === "Kelvin") {
        convertedTemperature = `${(temperature - 273.15).toFixed(2)} °C (Celsius), ${(((temperature - 273.15) * 9/5 + 32)).toFixed(2)} °F (Fahrenheit)`;
    }

    resultElement.textContent = `Converted Temperature: ${convertedTemperature}`;
}
