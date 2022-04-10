// Assignment code here

// Charaters for the password
var specChars = "!@#$%^&*(){}[]><+_-";
var num = "0123456789";

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
 
var passwordSelectors =""


//This function make the password
function generatePassword(){

  // reset password  selectors 
  passwordSelectors = ""
  // User enters desired length of password
  var passwordLength = window.prompt("How many characters would you like your password to contain?");

  //checks to see the  length of the of desired password
  console.log(passwordLength);
  // check to see if user password length is acceptable
  if (passwordLength > 7 && passwordLength < 129){
    window.alert("Your password is a valid length");

      // Ask user if they want to display special charcaters
      var specialChars = window.confirm("Click OK to confirm including special characaters");

      // Check to see if specail chars variable  is true of false
      console.log(specialChars);

      // add the specail chars to password Selectors
      if(specialChars){
        window.alert("At least one special Characters will be used")
        passwordSelectors += specChars
        console.log(passwordSelectors)
        
      }
      else{
        console.log(passwordSelectors)
      };

      
      //Ask user if they want to  include numeric characaters
      var numChars = window.confirm("Click OK to confirm including numeric characaters");
      // Check to see if numeric chars variable  is true of false
      console.log(numChars);

      if(numChars){
        window.alert("A least one Numeric Characters will be used")
      // add the specail chars to password Selectors
      passwordSelectors += num
      console.log(passwordSelectors)
      }else{
        console.log(passwordSelectors)
      };
      
      //Ask user if they want to  include lowercase characaters
      var lowerCaseChars = window.confirm("Click OK to confirm including Lowercase characaters");

      // Check to see if specail chars variable  is true of false
      console.log(lowerCaseChars);

      if(lowerCaseChars){
        window.alert("A least one lowercase letter will be used")
        // add the specail chars to password Selectors
        passwordSelectors += lowerChar
        console.log(passwordSelectors)
        }else{
          console.log(passwordSelectors)
        };

      //Ask user if they want to  include uppercase characaters
      var upperCaseChars = window.confirm("Click OK to confirm including Uppercase characaters");
      // Check to see if specail chars variable  is true of false
      console.log(upperCaseChars);

      if(upperCaseChars){
        window.alert("A least one uppercase letter will be used")
        // add the specail chars to password Selectors
        passwordSelectors += upperChar;       
        }
        else{
          console.log(passwordSelectors)
        };    
      console.log(passwordSelectors)
    }

  // closing else statement is password is incorrect length
  else{
    window.alert("Your password must be larger then 8 characters.  Password generate will restart");
  }
  // window.alert(passwordSelectors)
  // window.alert(passwordLength)

var password = "";
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * passwordSelectors.length);
  password += passwordSelectors.substring(randomNumber, randomNumber +1);
 }

 console.log(password)
 return password
 
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
