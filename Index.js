// constructor function for a letter
function Letter(letter) {
    // store letter
    this.character = letter;
    // checks if the letter has been guessed default false
    this.guess =false
};

// exporting our Student constructor
module.exports =Letter;