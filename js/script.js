// WRITES p@$$W0RD INPUT FOR #password FUNCTION
function writePassword(){
var password - generate{assword();}
var passwordText - document.querySelector("#password");

}
// HTML BUTTON GENERATION
const generateBtn = document.querySelector('#generate')

//ARR
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numberChars = ['1','2','3','4','5','6','7','8','9'];
const specialChars = ['0','!', '”', '#','$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\', {', '|', '}', '~'];
    
// DIFFERENT GLOBAL VARIABLES
const lowercaseChars = [];
const specialChars = [];
const numbericChars = [];
const uppercaseChars = [],

//----------------------------------------------------------------------------------------------------------------
// ASCERTAINs AN ITEM FROM THE ARRAY RANDOMLY
const getRandomChar = function (array){
    const randomIndex = math.floor(math.random() * array.length);
    const randomItem = array(randomIndex);

    return randomIndex
};

const getRandomIndex = function (array){
    const randomIndex = Math.floor(Math.random() * array.length);

    return randomIndex;
};


// REFERENCE FOR #GENERATE ELEMENT
var generateBtn - document.querySelectorSelector("#generate");

// ERECTs PASSWORD OPTIONS
const generatePasswordOptions = function(){

    const legnthInput = parseInt(prompt('HOW MANY CHARACTERS DO YOU NEED YOUR PASSWORD TO CONTAIN?'));

    const uppercaseCharInput = confirm('SELECT OK TO INCLUDE UPPERCASE CHARACTERS ');

    const specialCharInput = confirm('SELECT OK TO INCLUDE SPECIAL CHARACTERS ');

    const lowercaseCharInput = confirm('SELECT OK TO INCLUDE LOWERCASE CHARACTERS ');

    const numericCharInput = confirm('SELECT OK TO INCLUDE NUMERIC CHARACTERS ');


if (legnthInput > 66) {
    alert('PASSWORDS MUST not EXCEED 66 CHARACTERS')
    return;
}

if (legnthInput < 11){
    alert('PASSWORDS MUST ECEED 11 CHARACTERS')
    return;
}

if (isNaN(legnthInput) === true) {
    alert ('PASSWORD LEGNTH MUST BE DISPLAYED AS A NUMERICAL VALUE')
    return;
}

if (

hasNumericCharInput === false &&
hasUppercaseCharInput === false &&
hasLowercaseCharInput === false &&
hasSpecialCharInput === false 
)   {
    alert( 'You Must Accept At Minimun One Character Type';
    return;
    }

const passwordOptions = {
    legnth: legnthInput,
    hasSpecialChar: hasSpecialCharInput,
    hasNumericChar: hasNumericCharInput;
    hasLowercaseCharInput: hasLowercaseCharInput;
    hasUppercaseCharInput: hasUppercaseCharInput;

};
return passwordOptions;

} ;


// PASSWORD GENERATOR
const generatePassword = function (){
const options = generatePasswordOptions();

// STORAGE FOR STORING ARRAY RESULTS
const result = [];

// STORAGE FOR STORING p@$$W0RDS
let possibleCharArray = [];

// STOREHOUSE-GUARANTEES THAT ONE TYPE OF EACH CHARATER WILL BE INCLUDED
let guaranteedChars = [];


// VERIFIES APPROVAL FROM USERS & ADDS CHARACTERS TO INDIVIDUAL ARR
        if (options.hasLowercaseChars) {
    possibleCharArr = possibleCharArray.concat(lowercaseChars);
    guaranteedChars.push(getRandomChar(lowercaseChars));
    }

        if (options.hasUppercaseChars) {
        possibleCharArr = possibleCharArray.concat(uppercaseChars);
        guaranteedChars.push(getRandomChar(uppercaseChars));
        }
        if (options.hasNumericcaseChars) {
            possibleCharArr = possibleCharArray.concat(numericChars);
            guaranteedChars.push(getRandomChar(numericChars));
            }
         if (options.hasSpecialcaseChars) {
                possibleCharArr = possibleCharArray.concat(specialcaseChars);
                guaranteedChars.push(getRandomChar(specialChars));
                }
// LOOP ITERATOR FOR p@$$WORD LENGTH FROM THE OPTIONS-OBJECT THEN
// SELECTS INDICIES RANDOMLY FROM possibleCharsArr & 
// INPUTS INTO p@$$W0RD RESULT
        for (let i = 1; i < options.length; i++) {
            const possibleChars = getRandomIndex(result)
            result.push(possibleChars);
            }
        
    // MIXES IN AT MINIMUM 1 OF EACH GUARANTTEED CHARACTERS IN THE RESULT
        for (let i = 1; i < guaranteedChars.length; i++) {
            let ran
            
    // RETURN THE RESULT AFTER THE STRING IS CONVERTED
        return result.join('');
    };
// DISPLAY p@$$WORD IN HTML FORMAT
const displayPassword = function () {
const password = generatePassword();
const passwordTexas = document.getElementById('password');
passwordTexas.value = password;
};

// LISTENERS FOR EVENTS i.e .button click
generateBtn.addEventListener('click', displayPassword);
