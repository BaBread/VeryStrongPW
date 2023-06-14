// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!","@","#","$","%","^", "&","*"];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
let upperLetters = "Q W E R T Y U I O P A S D F G H J K L Z X C V B N M";
let lowerLetters = upperLetters.toLowerCase();
let upperChars = upperLetters.split(" ");
let lowerChars = lowerLetters.split(" ");
let passLength = 8;
let paramArr = [];

// Prompts to get the parameters"
function getPrompt() {
  paramArr =[];
  passLength = parseInt(prompt("How many characters do you want this password to be? (8-128 characters)"))

  if(isNaN(passLength)||passLength<8 || passLength>128){
    alert("The length of the pw must be a number and between 8-128 digits. Please try again");
    paramArr =[];
    return false
  }

  if (confirm("Do you want your password to include lower case letters?")) {
    paramArr = paramArr.concat(lowerChars);
  }

  if (confirm("Do you want your password to include upper case letters?")) {
    paramArr = paramArr.concat(upperChars);
  }

  if (confirm("Do you want your password to include special characters?")) {
    paramArr = paramArr.concat(specialChars);
  }

  if (confirm("Do you want your password to include numbers?")) {
    paramArr = paramArr.concat(numbers);
  }
  if (paramArr.length===0) {
    alert("No characters were selected. Please try again");
    paramArr =[];
    passLength=0;
    return false
  }
}




function generatePassword() {
  let genPw ="";
  for (i=0;i<passLength;i++){
    genPw = genPw + paramArr[Math.floor(Math.random()*paramArr.length)]
  } 

return genPw
  
}

// Write password to the #password input
function writePassword() {;
  getPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


