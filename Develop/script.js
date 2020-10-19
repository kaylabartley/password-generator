// Assignment code here
//function to generate and return password
function generatePassword(){
  //arrays of character types
  var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  var b = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var d = ["+", "-", "%", "_", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":", "@", "/","\\", "\'", "#", "$", ",", "." ];
  //while loops to implement error handling
  while(true){
    //prompt user for length
    var length = window.prompt("What length is your password (8-128):")
    if(length>=8 && length<=128){
      //if length is in between 8 and 128 then break from loop
      break;
    }
    else{
      window.alert("Password length must be between 8 and 128. Try again.");
    }
  }
  while(true){
    //prompt user for character types
    var lowercase = window.confirm("Do you want lowercase letters?");
    var uppercase = window.confirm("Do you want uppercase letter?");
    var numbers = window.confirm("Do you want numbers?");
    var specialchar = window.confirm("Do you want special characters?");
    
    break;

  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
