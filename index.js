// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Letter.js should not require any other files.


// Word.js should only require Letter.js


// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js


// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)


// vars for required files and packages
var word = require("./word.js");
var inquirer = require("inquirer")

//array of words
var wordChoices = ["function", "object", "array", "constructor", "html", "css", "javascript", "firebase", "node", "var", "else","loop"]

var correctArray = [];

//intially get random word
var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]

console.log(randomWord)

//pass the random word throught the word constructor
passWord = new Word(randomWord)

//does it need a new word
var requireNewWord = false;

// arrays for incorrect and correct guesses
var incorrectLetters = [];
var correctLetters = [];

//var to keep track of lives
var guessesLeft = 10;


//function that is run if the game needs a new word 
function start(){
    if (requireNewWord) {
        // Randomly selects a word and uses the Word constructor to store it
        var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]

        //passes new random word through the word constructor
        passWord = new Word(randomWord);
        
        requireNewWord = false;
    }
}


// check to see if the letter that was guessed is in the word

var wordComplete = [];

passWord.objectArray.forEach(completeCheck);

//letters left
if (wordComplete.includes(false)){

// Prompts the user for each guess and keeps track of the user's remaining guesses
    inquirer.prompt([
        {
            type: "input",
            name: "userinput",
            message: "Please guess a letter!"
        }
    ]).then (function(input){
        if (!letterArray.includes(input.userinput) || input.userinput.length >1){
            console.log(`
            INCORRECT GUESS
            Please try again!
            `);
            start()
        } else {
            if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === ""){
                console.log(`You have already guessed that letter! Please, try again!`);
                start()
            } else {
                var wordCheckArr = [];

                passWord.userGuess(input.userinput);

                // check if the guess in correct

                passWord.objectArray.forEach(wordCheck);

                if (wordCheckArr.join('') === wordComplete.join('')) {
                    console.log(`INCORRECT`)

                    incorrectLetters.push(input.userinput);
                    guessesLeft--;
                } else {
                    console.log(`CORRECT`)

                    correctLetters.push(input.userinput);
                }

                passWord.log();

                console.log(`
                Guesses Left: ${guessesLeft}
                You have already guessed: ${incorrectLetters.join(" ")}
                `)

                //determine it the  player is out of lives
                if (guessesLeft > 0) {
                    //get a new word
                    start()
                } else {
                    console.log(`You have lost! Please try again`)

                }

                function wordCheck(key) {
                    wordCheckArr.push(key.guessed);
                }
            }
        }

});
} else {
    console.log(`You have won the game`)
}

function completeCheck(key) {
    wordComplete.push(key.guessed);
}

