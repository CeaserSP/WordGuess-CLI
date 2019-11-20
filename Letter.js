// constructor function for a letter
function Letter(letter) {
    // store letter
    this.character = letter;
    // checks if the letter has been guessed default false
    this.guess =false;
    // function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed.
    function Guessed(){
        if(guess = true){
            return letter;
        }else{
            return "_"
        }
    }
    console.log(Guessed())
};

// exporting our Student constructor
module.exports =Letter;