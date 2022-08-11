'use strict'

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// ##################
// Functions
// ##################

function logger() {
  console.log('I am Joshua');
}

logger();
logger();
logger();

// Functions are like machines
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const fruits = `Juice with ${apples} apples and ${oranges} oranges`;
  return fruits;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);