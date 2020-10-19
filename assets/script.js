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
    // if-else statement to check if the user chose at least one character type
    if(lowercase || uppercase || numbers || specialchar ){
      //customize password depending on character type entry
      if (lowercase && uppercase && numbers && specialchar){
        var value="";
        var result=[""];
        // this for loop pushes a random value into the result array. how many times it loops depends on the length variable
        for(var i=0; i<length; i++){
          /*switch statement that goes between 1 and 4 (all inclusive) to randomly choose if character
           will be lowercase, uppercase, a number, or a special charater */
          switch(Math.floor((Math.random()*4)+1)){
            case 1:
              //case generating a random lowercase value from 26 characters
              value= a[Math.floor(Math.random()*26)];
              break;
            case 2:
              //case generating a random uppercase value from 26 characters
              value= b[Math.floor(Math.random()*26)];
              break;
            case 3:
              //case generating a random number value from 10 characters
              value= c[Math.floor(Math.random()*10)];
              break;
            case 4:
              //case generating a random special character value from 24 characters
              value= d[Math.floor(Math.random()*24)];
              break;
          }
          //add value generated to the result array
          result.push(value);
        }
      }
      else if(lowercase && uppercase && numbers){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*3)+1)){
            case 1:
              value= a[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= b[Math.floor(Math.random()*26)];
              break;
            case 3:
              value= c[Math.floor(Math.random()*10)];
              break;
          }
          result.push(value);
        }
      }
      else if(lowercase && uppercase){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*2)+1)){
            case 1:
              value= a[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= b[Math.floor(Math.random()*26)];
              break;
          }
          result.push(value);
        }
      }
      else if(lowercase){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          value= a[Math.floor(Math.random()*26)];
          result.push(value);
        }
      }
      else if(lowercase && specialchar){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*2)+1)){
            case 1:
              value= a[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= d[Math.floor(Math.random()*24)];
              break;
          }
          result.push(value);
        }
      }
      else if(lowercase && numbers){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*2)+1)){
            case 1:
              value= a[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= c[Math.floor(Math.random()*10)];
              break;
          }
          result.push(value);
        }
      }
      else if(lowercase && uppercase && specialchar){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*3)+1)){
            case 1:
              value= a[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= b[Math.floor(Math.random()*26)];
              break;
            case 3:
              value= d[Math.floor(Math.random()*24)];
              break;
          }
          result.push(value);
        }

      }
      else if(lowercase && numbers && specialchar){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*3)+1)){
            case 1:
              value= a[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= c[Math.floor(Math.random()*10)];
              break;
            case 3:
              value= d[Math.floor(Math.random()*24)];
              break;
          }
          result.push(value);
        }

      }
      else if(uppercase){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          value= b[Math.floor(Math.random()*26)];
          result.push(value);
        }
      }
      else if(uppercase&&numbers){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*2)+1)){
            case 1:
              value= b[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= c[Math.floor(Math.random()*10)];
              break;
          }
          result.push(value);
        }
      }
      else if(uppercase&&specialchar){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*2)+1)){
            case 1:
              value= b[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= d[Math.floor(Math.random()*24)];
              break;
          }
          result.push(value);
        }
      }
      else if(uppercase&&numbers&&specialchar){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*3)+1)){
            case 1:
              value= b[Math.floor(Math.random()*26)];
              break;
            case 2:
              value= c[Math.floor(Math.random()*10)];
              break;
            case 3:
              value= d[Math.floor(Math.random()*24)];
              break;
          }
          result.push(value);
        }
      } 
      else if(numbers){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          value= c[Math.floor(Math.random()*10)];
          result.push(value);
        }
      }
      else if(numbers&&specialchar){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          switch(Math.floor((Math.random()*2)+1)){
            case 1:
              value= c[Math.floor(Math.random()*10)];
              break;
            case 2:
              value= d[Math.floor(Math.random()*24)];
              break;
          }
          result.push(value);
        }
      }
      else if(specialchar){
        var value="";
        var result=[""]
        for(var i=0; i<length; i++){
          value= d[Math.floor(Math.random()*24)];
          result.push(value);
        }
      }
      break;
    }
    else{
      window.alert("You must choose at least one character type. Try again.");
    }
  }
  // returns the result array as a string with no spaces or commas in between characters
  return result.join("");
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
