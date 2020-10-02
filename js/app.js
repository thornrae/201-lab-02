'use strict';

var userName = prompt('Hi! What is your name?');
console.log(userName);

// Hometown Question
var homeTown = prompt('Is Taylor from Seattle?').toLowerCase();
console.log(homeTown);

if (homeTown === 'yes' || homeTown === 'y') {
  // console.log('Correct! Taylor is from Seattle');
  alert('Correct, ' + userName + '! Taylor is from Seattle');
}

// Profession Question
var profession = prompt('Is Taylor a software developer?').toLowerCase();
console.log(profession);

if (profession === 'yes' || profession === 'y'){
  // console.log('Correct! Taylor is a software developer');
  alert('Correct, ' + userName + '! Taylor is a software developer');
}

// Operating System Question
var operatingSystem = prompt('Is Taylor a MacOS user?').toLowerCase();
console.log(operatingSystem);

if (operatingSystem === 'yes' || operatingSystem === 'y'){
  // console.log('Correct! Taylor is a MacOS user');
  alert('Correct, ' + userName + '! Taylor is a MacOS user');
}

// Houseplants
var housePlants = prompt('Does Taylor have house plants?').toLowerCase();
console.log(housePlants);

if(housePlants === 'yes' || housePlants === 'y'){
  // console.log('Correct! Taylor has house plants');
  alert('Correct, ' + userName + '! Taylor has house plants');
}

// Travel
var travel = prompt('Has Taylor traveled out of the country?').toLowerCase();
console.log(travel);

if(travel === 'yes' || travel === 'y'){
  // console.log('Correct! Taylor has traveled out of the country');
  alert('Correct, ' + userName + '! Taylor has traveled out of the country');
}

//Final Message to User
var finalMessage = alert('Thanks for your guesses, ' + userName + ', I hope you were able to learn a little more about Taylor.');
console.log(finalMessage);

