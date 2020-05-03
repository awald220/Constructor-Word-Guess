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


// Randomly selects a word and uses the Word constructor to store it
var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]

console.log(randomWord)

// Prompts the user for each guess and keeps track of the user's remaining guesses
inquirer.prompt([
    {
        name: "name",
        message: "Please guess a letter!"
    }
]).then (function(answer){

});

