//take user input to create a secure password
var resultEl = document.getElementById('password');
var generateBtn = document.getElementById('generate');
var copyBtn = document.getElementById('copy');

// Global Variables
var lowerCaseEl,
upperCaseEl,
numberEl,
symbolEl,  
lengthEl,
length,
lowercase,
uppercase,
symbol,
number;

//variables used to create the arrays for the different characters depending on user's password needs 
var masterPassword= '';
var lowerCaseArr = 'abcdefghkjklmnopqrstuvwxyz';
var upperCaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbolArr = '!@#$%^&*()_+=/{}';
var numberArr = '0123456789';

 
// when the user clicks on the button to generate the password then this starts the process 
generateBtn.addEventListener('click', generatePassword);
   
// function that creates the password based upon user input 
function generatePassword() {
        var lengthEl = prompt("Please select the desired password length using number between a 8 and 128.");
        var length = parseInt(lengthEl);
             if(length < 8 || length > 128 || !length) {
                alert("Sorry you need to select a number between 8 and 128 Characters.")
     
              } 

         // Asks user if they want to use lowercase letters
         var lowerCaseEl = confirm("Will you need to have lower case characters in your password?");
         var lowercase = lowerCaseEl;
             if(lowerCaseEl) {           
                 masterPassword += lowerCaseArr.slice(0,8);    
                //  console.log(lowercase)
             }  
 
             // Asks user if they want to use uppercase letters
             var upperCaseEl = confirm("Will you need to have upper case characters in your password?");
             var uppercase = upperCaseEl;
             if(upperCaseEl) {   
                 masterPassword += upperCaseArr.slice(0,8);;   
                //  console.log(upperCaseEl);
             }
 
             // Asks user if they want to use a symbol
             var symbolEl = confirm("Will you need to have any special characters in your password?");
             var symbol = symbolEl;
             if(symbolEl) {   
                 masterPassword += symbolArr.slice(0,8);          
                //  console.log(symbol);

             }
 
             // Asks user if they want to a number
             var numberEl = confirm("Will your password require any numbers?");
             var number = numberEl;
             if(numberEl) { 
                 masterPassword += numberArr.slice(0,8);                             
                //  console.log(number)
             }
             // User must select at least 1 character option or the generate function will be called again
             if (!lowerCaseEl && !upperCaseEl && !numberEl && !symbolEl) {
                 alert("Please select either lower, uppercase, numbers or special characters to create your password.")      
         };
       
             resultEl = newPassword(length, masterPassword);
}
 
//assign the results of the function to newPassword 
newPassword = function (length, masterPassword) {
    var resultEl = document.getElementById('password');
    //Iniitalize     
    let userPassword = '';
    console.log(length);
    //Loop through the number of of characters the user desires and create random characters to create the password with the correct parameters
    for (let i = 0; i < length; i++) {
        userPassword += masterPassword.charAt(Math.floor(Math.random() * masterPassword.length))
    };
    // console.log(userPassword);
    //display results of the new password created on the screen 
    resultEl.innerHTML = userPassword ;
   

}

function copyClip() {
    // Get the text in the text area
    var copyBtn = document.getElementById("password");
  

    //grab contents of textarea 
    copyBtn.select();
    copyBtn.setSelectionRange(0, 99999); 
  
    //Copy textarea 
    document.execCommand("copy");
  
    //if the user tries to click copy button before creating the password it will throw up an error otherwise it will copy it 
    if (copyBtn.innerHTML === '') {
            setMessage('You must generate a password first!', 'red')
        } else 
            setMessage('Copied to the clipboard', 'green')
        };
      



    