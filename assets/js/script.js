// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function generatePassword() {
   
  //Array to store total possible characters for password
  var possibleChar = [];

  //requests length and checks if the requested length is a number and is between 8-128
  var passwordLength = window.prompt ("How long would you like your password to be? (8-128)");

  if (isNaN(passwordLength)) {
    alert ("You must choose a number.");
    generatePassword();
  }else if (passwordLength < 8 || passwordLength > 128) {
    alert ("Your number must be between 8 and 128 characters.");
    generatePassword();
  }else {
  }

  //Building possibleChar array
  //Asking and adding Uppercase
  var uppercaseQuery = window.confirm ("Press OK if password should contain Uppercase letters");

  if (uppercaseQuery) {
    possibleChar = possibleChar.concat(uppercase);
  } else {
  }

  //Asking and adding Lowercase
  var lowercaseQuery = window.confirm ("Press OK if password should contain Lowercase letters");

  if (lowercaseQuery) {
    possibleChar = possibleChar.concat(lowercase);
  } else {
  }

  //Asking and adding Numbers
  var numbersQuery = window.confirm ("Press OK if password should contain Numbers");

  if (numbersQuery) {
    possibleChar = possibleChar.concat(numberChars);
  } else {
  }

  //Asking and adding Special Characters
  var specialCharsQuery = window.confirm ("Press OK if password should contain Special Characters");

  if (specialCharsQuery) {
    possibleChar = possibleChar.concat(specialChars);
  } else {
  }

  //Iteration selecting password as an array
  var possiblePassword = [];

  for (let i = 0; i < passwordLength; i++) {
    var randomChar = possibleChar[Math.floor(Math.random() * possibleChar.length)];
    possiblePassword.push(randomChar);
  }

  //Turn array into a string
  var finalPassword = possiblePassword.join("");

  return finalPassword;
}
