var Letter = function(value){
    this.letter = value;
    this.guessed = false;
    this.toString = function(){
        if(this.letter === " "){
            this.guessed = true;
            return " ";
        }else{
            if(this.guessed === false){
                return "_";
            }else{
                return this.letter;
            }
           
        }
    },
    this.correctGuess = function(guess){
        if (guess === this.letter){
            this.guessedYet = true;
        }
    }
}

console.log(`letter is working`)

module.exports = Letter;