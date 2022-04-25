/**
 * set the initialAmount to the first textbox input 
 */
let initialAmount = document.getElementById("initialAmount").value = "";

/**
 * conversionTime function used to implement the equation that matches the selected
 * radio button. Once the initial amount that was typed in by the user, the math will
 * be implemented and print to the convertedAmount textbox. If an initial amount has been
 * typed in without any unit chosen, an alert is set to flash on the screen.
 */
function conversionTime() {
    const radioButtons = document.querySelectorAll('input[name=initialUnit]');
    const convertedAmount = document.getElementById("convertedAmount");
    initialAmount = document.getElementById("initialAmount").value;

    var meters = document.getElementById("meters");
    var feet = document.getElementById("feet");
    var kilometers = document.getElementById("kilometers");
    var miles = document.getElementById("miles");
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    var kilogram = document.getElementById("kilogram");
    var pounds = document.getElementById("pounds");
    var grams = document.getElementById("grams");
    var ounces = document.getElementById("ounces");

    for (i = 0; i < radioButtons.length; i++) {

        if (meters.checked) {
            convertedAmount.value = (initialAmount * 3.28084).toFixed(4);
            break;
        } else if (feet.checked) {
            convertedAmount.value = (initialAmount * 0.3048).toFixed(4);
            break;
        } else if (kilometers.checked) {
            convertedAmount.value = (initialAmount / 1.609).toFixed(4);
            break;
        } else if (miles.checked) {
            convertedAmount.value = (initialAmount * 1.609).toFixed(4);
            break;
        } else if (celsius.checked) {
            convertedAmount.value = ((initialAmount * 1.800) + 32).toFixed(4);
            break;
        } else if (fahrenheit.checked) {
            convertedAmount.value = ((initialAmount - 32) / 1.800).toFixed(4);
            break;
        } else if (kilogram.checked) {
            convertedAmount.value = (initialAmount * 2.205).toFixed(4);
            break;
        } else if (pounds.checked) {
            convertedAmount.value = (initialAmount / 2.205).toFixed(4);
            break;
        } else if (grams.checked) {
            convertedAmount.value = (initialAmount / 28.35).toFixed(4);
            break;
        } else if (ounces.checked) {
            convertedAmount.value = (initialAmount * 28.35).toFixed(4);
            break;
        } else {
            alert("Please select a unit of measurement!");
            break;
        }
    }
}