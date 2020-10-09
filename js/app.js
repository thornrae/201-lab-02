'use strict';


var userName = prompt('Hi! What is your name?');
console.log(userName);

var correctAnswer=0;

// // Hometown Question
function homeTown() {
var homeTown = prompt('Is Taylor from Seattle?').toLowerCase();
// console.log(homeTown);

if (homeTown === 'yes' || homeTown === 'y') {
  // console.log('Correct! Taylor is from Seattle');
  alert('Correct, ' + userName + '! Taylor is from Seattle');
  correctAnswer++;
} else {
  alert('You got that wrong, ' + userName + '.');
}
}
homeTown();
// // Profession Question
function profession() {
var profession = prompt('Is Taylor a software developer?').toLowerCase();
// console.log(profession);

if (profession === 'yes' || profession === 'y'){
  // console.log('Correct! Taylor is a software developer');
  alert('Correct, ' + userName + '! Taylor is a software developer');
  correctAnswer++;
}else {
  alert('You got that wrong, ' + userName + '.');
}
}
profession();
// // Operating System Question
function operatingSystem() {
var operatingSystem = prompt('Is Taylor a MacOS user?').toLowerCase();
// console.log(operatingSystem);

if (operatingSystem === 'yes' || operatingSystem === 'y'){
  // console.log('Correct! Taylor is a MacOS user');
  alert('Correct, ' + userName + '! Taylor is a MacOS user');
  correctAnswer++;
} else {
  alert('You got that wrong, ' + userName + '.');
}
}
operatingSystem();
// // Houseplants
function housePlants() {
var housePlants = prompt('Does Taylor have house plants?').toLowerCase();
// console.log(housePlants);

if(housePlants === 'yes' || housePlants === 'y'){
  // console.log('Correct! Taylor has house plants');
  alert('Correct, ' + userName + '! Taylor has house plants');
  correctAnswer++;
} else {
  alert('You got that wrong, ' + userName + '.');
}
}
housePlants();
// // Travel
function travel() {
var travel = prompt('Has Taylor traveled out of the country?').toLowerCase();
// console.log(travel);

if(travel === 'yes' || travel === 'y'){
  // console.log('Correct! Taylor has traveled out of the country');
  alert('Correct, ' + userName + '! Taylor has traveled out of the country');
  correctAnswer++;
} else {
  alert('You got that wrong, ' + userName + '.');
}
}
travel();
// How many countries?

function countries() {
var countryGuesses = 0;

while (countryGuesses < 4) {
  var numberOfCountries = prompt('How many countries has Taylor travelled to? Please answer in numeric value.');
  // console.log(numberOfCountries);
  if (numberOfCountries > '7'){
    alert('Too high, ' + userName + ', guess again!');
    countryGuesses++;
  } else if (numberOfCountries < '7'){
    alert('Too low, ' + userName + ' guess again!');
    countryGuesses++;
  } else if(numberOfCountries === '7'){
    alert('Correct! ' + userName + '.' );
    correctAnswer++;
    countryGuesses++;
    break;
  }

  if (countryGuesses === 4){
    alert('You are out guesses, ' + userName + ', on to the next question!');
  }
}
}
countries();
// Favorite Color
function favColor() {
var colorArray = ['orange', 'green'];

var attempts = 0;

while (attempts < 6){
  var faveColors = prompt('What are Taylor\'s favorite colors?').toLowerCase();

  if (faveColors === colorArray[0] || faveColors === colorArray[1]){
    alert('Correct, ' + userName + ', Taylor\'s favorite colors are orange and green!');
    attempts = 6;
    correctAnswer++;
    break;
  }else if (faveColors !== colorArray[0] || faveColors !== colorArray[1]){
    alert('wrong guess again');
    attempts++;
  }

  if (attempts === 6){
    alert('You are out guesses, ' + userName + '.  Click okay to finish.');
  }
}
}
favColor();

//Final Message to User
var finalMessage = alert('Thanks for your guesses, ' + userName + ', I hope you were able to learn a little more about Taylor.  You got ' + correctAnswer + ' answers right out of 7.');
console.log(finalMessage);
