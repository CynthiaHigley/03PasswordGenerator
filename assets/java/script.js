// Generate a random password with the input provided by the user
var resultEl = document.getElementById('password');
var generateBtn = document.getElementById('generate');
var copyBtn = document.getElementById('copy');
// var message = document.getElementById('message')



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


var masterPassword= '';
var lowerCaseArr = 'abcdefghkjklmnopqrstuvwxyz';
var upperCaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbolArr = '!@#$%^&*()_+=/{}';
var numberArr = '0123456789';

 
// Click event to fire off the user prompts and gather user input to formulate the password functions
generateBtn.addEventListener('click', generatePassword);
   
// function to ask for users input and conditional logic
function generatePassword() {
        var lengthEl = prompt("Pick a number between a 8 and 128 for the password length");
        var length = parseInt(lengthEl);
             if(length < 8 || length > 128 || !length) {
                alert("Password Length Must be between 8 and 128 Characters")
                
                // return        
              } 

         // Asks user if they want to use lowercase letters
         var lowerCaseEl = confirm("Would you like lower case characters?");
         var lowercase = lowerCaseEl;
             if(lowerCaseEl) {           
                 masterPassword += lowerCaseArr.slice(0,8);    
                //  console.log(lowercase)
             }  
 
             // Asks user if they want to use uppercase letters
             var upperCaseEl = confirm("Would you like upper case characters?");
             var uppercase = upperCaseEl;
             if(upperCaseEl) {   
                 masterPassword += upperCaseArr.slice(0,8);;   
                //  console.log(upperCaseEl);
             }
 
             // Asks user if they want to use a symbol
             var symbolEl = confirm("Would you like special characters?");
             var symbol = symbolEl;
             if(symbolEl) {   
                 masterPassword += symbolArr.slice(0,8);          
                //  console.log(symbol);

             }
 
             // Asks user if they want to a number
             var numberEl = confirm("Would you like numbers?");
             var number = numberEl;
             if(numberEl) { 
                 masterPassword += numberArr.slice(0,8);                             
                //  console.log(number)
             }
             // User must select at least 1 character option or the generate function will be called again
             if (!lowerCaseEl && !upperCaseEl && !numberEl && !symbolEl) {
                 alert("You must select at least one option for password characters.")
                //  generatePassword();          
         };
       
             resultEl = newPassword(length, masterPassword);
}
 
//Password Generation Function
newPassword = function (length, masterPassword) {
    var resultEl = document.getElementById('password');
    //Iniitalize     final password as blank string
    let userPassword = '';
    console.log(length);
    //Append random character from the masterPassword 
    for (let i = 0; i < length; i++) {
        userPassword += masterPassword.charAt(Math.floor(Math.random() * masterPassword.length))
    };
    console.log(userPassword);
   
    resultEl.innerHTML = userPassword ;
   

}

function copyClip() {
    // Get the text in the text area
    var copyBtn = document.getElementById("password");
  

    //Select the textarea
    copyBtn.select();
    copyBtn.setSelectionRange(0, 99999); 
  
    //Copy the text inside the textarea
    document.execCommand("copy");
  
    // logic to display message
    if (copyBtn.innerHTML === '') {
            setMessage('You must generate a password first!', 'red')
        } else 
            setMessage('Copied to the clipboard', 'green')
        };
      
 
// Will flash a success alert if copied to clipboard or failed alert  and will time out after 3 seconds
function setMessage(msg, color) {
        message.style.color = color
        message.textContent = msg;

}


    