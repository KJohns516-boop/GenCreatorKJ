// Assignment Code
var generateBtn = document.querySelector("#generate");

var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passwordRandom() {
  
  return symbols[Math.floor(Math.random() * symbols.length)]; 
  return numbers[Math.floor(Math.random() * numbers.length)]; 
  return lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}


function generatePassword() {

var passwordSpan = prompt("Please input the designated number of characters. Password must meet the minimum length of 8 characters but not exceed 128.");
var symbols = confirm("Please input a special character!");
var numbers = confirm("Please input a number!");
var lowerCase = confirm("Please input a lowercase character!");
var upperCase = confirm("Please input an uppercase letter!");


passwordSpan = parseInt(passwordSpan);
upperCase = parseInt(upperCase);
lowerCase = parseInt(lowerCase);
numbers = parseInt(numbers);
symbols = parseInt(symbols);


for (var i = 0; i = passwordSpan.input; i++) {
console.log("My password" + [i] + ".");}

if (passwordSpan === true) {console.log(passwordSpan)}
else console.log("IS IT WORKING.");

if (upperCase === true) {console.log(upperCase)}
else console.log("Did it work?");

if (lowerCase === true) {console.log(lowerCase)}
else console.log("Woooo it worked.");

if (numbers === true) {console.log(numbers)}
else console.log("I guess it works.");

if (numbers === true) {console.log(symbols)}
else console.log("Doesn't work");

}

var randomPassword = [];

for ( var i = 0; i < length; i++ ) {
  const characterCode =
   characterCodes[Math.floor(Math.random() * charCodes.length)];
   passwordCharacters.push(String.fromCharCode(characterCode));
}

 randomPassword += symbols;
 randomPassword += numbers;
 randomPassword += upperCase;
 randomPassword += lowerCase;

 {

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 }
