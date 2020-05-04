var Letter = require("./letter.js");

 function Word(answer){
    this.objectArray = [];

        for (var i = 0; i < answer.length; i++){
            var letter = new Letter(answer[i]);
            this.objectArray.push(letter)
        }

    this.log = function(){
        answerLog = "";
        for(var j = 0; j < this.objectArray.length; j++){
            answerLog += this.objectArray[j] + " ";
        }
        console.log(answerLog)

    }
    this.userGuess = function(input){
        for (var k = 0; i < this.objectArray.length; i++){
            this.objectArray[k].guess(input);
        }

    }
}

console.log(`this is working word`)

module.exports = Word;