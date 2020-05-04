// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word


// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.


// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

//var for required pages
var letter = require("./letter.js");

var Word = function (objectArray, underscore,character){
    this.objectArray = [];

        for (var i = 0; i < answer.length; i++){
            var letter = new Letter(answer[i]);
            this.objectArray.push(letter)
        }

    this.underscore = function(){
        answerLog = "";
        for(var j = 0; j < this.objectArray.length; j++){
            answerLog += this.objectArray[j] + " ";
        }
        console.log(answerLog)

    }
    this.character = function(input){
        for (var k = 0; i < this.objectArray.length; i++){
            this.objectArray[k].guess(input);
        }

    }
}

console.log(`this is working word`)