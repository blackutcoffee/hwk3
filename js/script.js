//ARR
capAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
regAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "+"];

// DIFFERENT GLOBAL VARIABLES
var lengths;
var chooseCapital;
var chooseLower;
var chooseNumber;
var chooseSymbol;
var substantiated = [];

//----------------------------------------------------------------------------------------------------------------
// ASCERTAINs AN ITEM FROM THE ARRAY RANDOMLY
function getRandomChar(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomChar = array[randomIndex];
    console.log("Due Diligence");
    console.log(randomChar);
    return randomChar;
};

// PASSWORD OPTIONS GENERATOR
function generatePassword() {
    var result = [];
     lengths = parseInt(window.prompt("Please pick a password length between 8 and 128 characters."));
     if (!lengths) {
       window.alert("Please pick a valid value!");
        return generatePassword();
    
     } else if (lengths <= 8 || length >= 128) {
       lengths = parseInt(window.prompt("Please choose between 8 and 128."));
        return generatePassword();
    
     } else {
       chooseCapital = window.confirm("Do you want to include capital letters?");
       chooseLower = window.confirm("Do you want to include lowercase letters?");
       chooseNumber = window.confirm("Do you want to include numbers?");
       chooseSymbol = window.confirm("Do you want to include symbols?");
     };
    
     if (!chooseCapital && !chooseLower && !chooseNumber && !chooseSymbol) {
       selection = window.alert("You must choose at least one option!");
       return generatePassword();
     }

// CONDITIONAL IF/THEN STATEMENTS
    if (chooseCapital) {
        substantiated = substantiated.concat(capAlphabet);
    }

    if (chooseLower) {
        substantiated = substantiated.concat(regAlphabet);
    }

    if (chooseNumber) {
        substantiated = substantiated.concat(numbers);
    }

    if (chooseSymbol) {
        substantiated = substantiated.concat(symbols);
    }
// STORAGE FOR STORING ARRAY RESULTS
    for (var i = 0; i < lengths; i++) {
        
        var randomChar = getRandomChar(substantiated);
        result.push(randomChar);
    }
    console.log(result);

// RETURN THE RESULT AFTER THE STRING IS CONVERTED
    substantiated = [];
    return result.join("");
};
// HTML BUTTON GENERATION FOR #generate element
var generateBtn = document.querySelector("#generate");

// Write COMPLEX PASSPHRASE to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// LISTENERS FOR EVENTS i.e .button click
generateBtn.addEventListener("click", writePassword);