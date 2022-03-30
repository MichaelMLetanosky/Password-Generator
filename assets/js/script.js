// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Array to store total possible characters for password
var possibleChar = []


//Function to add characters to the possibleChar array
function includeChar (x) {
  possibleChar = possibleChar.concat(x);
}

function generatePassword() {
  var passwordLength = window.prompt ("How long would you like your password to be?")
  var numLength = parseInt (passwordLength)

  if (numLength !== passwordLength)
  
}

//Randomizer 
//var randomChar = possibleChar[Math.floor(Math.random() * possibleChar.length)];


//Iteration for picking random chars for given length
//for (let i = 0; i < passwordLength.length; i++) {
    
//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//test logs
console.log(specialChars)
console.log(numberChars)
console.log(uppercase)
console.log(lowercase)
console.log(possibleChar)
includeChar (numberChars)
console.log(possibleChar)
