// constructor function for a letter
function Letter(letter) {
    // store letter
    this.character = letter;
    // checks if the letter has been guessed default false
    this.guess =false;
    // function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed.
    this.guessed = function(){
        if(this.guess = true){
            return letter;
        }else{
            return "_";
        }
    };
    // console.log(Guessed())
    // function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly
    this.checkUp =  function(userGuess){
        if(userGuess = letter){
            this.guess = true;
        }
        return this.guess;
    };
};

// exporting our Student constructor
module.exports =Letter;

// TO DO:Test returns

// Test
var test = new Letter("a");

// console.log(test);
console.log(test.guessed);