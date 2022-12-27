function lowerCase() {
    //define regular expression lower case
    let lowerCase = /[a-z]/g;

    //get content of password box 
    let password = document.getElementById("pwd").value; 

    //compaere content of input box of regular expression
    if (password.match(lowerCase)) {
        document.getElementById("messageLC").innerHTML = "Good Job you have lower case";
    } else {
        document.getElementById("messageLC").innerHTML = "Missing lower case";
    }            
}

function upperCase() {
    //define regular expression upper case
    let upperCase = /[A-Z]/g;

    //get content of password box 
    let password = document.getElementById('pwd').value; 

    //compaere content of input box of regular expression
    if(password.match(upperCase)) {
        document.getElementById('messageUC').innerHTML="Good Job you have Upper case";
    }
    else{
        document.getElementById('messageLC').innerHTML="Missing Upper case";
    }
}

function numb() {
    //define regular expression numbers
    let numbers = /[0-9]/g;

    //get content of password box 
    let password = document.getElementById('pwd').value; 

    //compaere content of input box of regular expression
    if(password.match(numbers)) {
        document.getElementById('messageNC').innerHTML="Good Job you have Numbers";
    }
    else{
        document.getElementById('messageNC').innerHTML="Missing Numbers";
    }
}

function lgh() {
    //define regular expression character length
    let textLength = /^[\w]{8,}$/;

    //get content of password box 
    let password = document.getElementById('pwd').value; 

    //compaere content of input box of regular expression
    if(password.match(textLength)) {
        document.getElementById('messageLcC').innerHTML="Good Job you have enough Characters";
    }
    else{
        document.getElementById('messageLcC').innerHTML="Missing Characters";
    }
}
