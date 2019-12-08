# 03PasswordGenerator
password generator 
URL for git hub https://cynthiahigley.github.io/03PasswordGenerator/
https://github.com/CynthiaHigley/03PasswordGenerator

index.html 
declares the libraries for bootstap, css, and javascript so that we can reference attributes, functions and then the website functional 
displays the Password Generator in jumbotron 
create a card to hold the title, the textarea to hold the new password, 
two buttons (generate and copy) and then a footer at the bottom 

script.js
create variables to grab the input from user and then 
variables to capture data used to create a secure password 
create arrays for each of the special parts of the password which the user will be asked if they want to use 

get input from the user when they click on button to generate the password 
when clicked insite the generatePassword function which will get the length of the password user desires 
    check that the number is between 8 - 128 
 
then using prompts check to see if they want lowercase, uppercase, special characters or numbers in their array to determind which 
character types they are seeking. If they don't choose any of the four choices let them know they need to 
send the results assigned to the 

function of newPassword 
this function will take the parameters of the length and masterPassword and assign them to the value of newPassword by 
getting the information, looping each time to get the characters and displaying that to the screen 
 
dont' really have the function copyClip working 
but the idea is to take the information in the textarea then when the user selects the copy button it will capture
that info so they can enter it some where else. 


style.css
set attributes that I was unable to set using bootstrap 
jumbotron drove me nuts trying to get the height to a logical size 

I was unsure how to get a graphic in a md file so I included a screen shot of my work located in my CSS folder 
