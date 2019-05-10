
const toCelsius = (temp) => {
 const celsius = (temp-32) * (5/9)
 domStringbulider(celsius, 'c')
}

const toFahrenheit = (temp) => {
 const fahrenheit =  (temp * (9/5) + 32)
 domStringbulider(fahrenheit, 'f')
}

const domStringbulider = (temp, unit) => {
 let domString = ''
 if ((unit === 'f' && temp > 90) || (unit === 'c' && temp > 32)) {
    tempClass = 'red';
  } else if ((unit === 'f' && temp < 32) || (unit === 'c' && temp < 0)) {
    tempClass = 'blue';
  } else {
    tempClass = 'green';
  }
 domString += `<div class=${tempClass}>${temp}</div>`
 printToDom('tempoutput', domString)
}


// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  const input = document.getElementById("tempinput")
  if (document.getElementById("celsius").checked) {
      toCelsius(input.value)
  } else {
      toFahrenheit(input.value)
  }
}

const clear = () => {
    document.getElementById("tempinput").value = ''
    printToDom('tempoutput', '')
}

// Assign a function to be executed when the button is clicked
const eventlistners = () => {
    document.getElementById("convert-button").addEventListener("click", determineConverter)
    document.getElementById("clear-button").addEventListener("click", clear)
}

const printToDom = (divId, textToPrint) =>{
    const selecteddiv = document.getElementById(divId)
    selecteddiv.innerHTML = textToPrint
 };

const init = () => {
    eventlistners()
};
init ();