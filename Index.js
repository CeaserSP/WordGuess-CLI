var Word = require("./Word.js");
var inquirer = require("inquirer")
var fs = require("fs");

// TO DO: SET Randomly selects a word and uses the `Word` constructor to store it. * Prompts the user for each guess and keeps track of the user's remaining guesses
function gameLogic) {
    // Read in words
    fs.readFile('./words.txt', function read(err, data) {
        if (err) {
            throw err;
        }
        // get random word
        // TO DO: Check length of word is more than four letters
        // split word.txt on line
        splitWords = data.split('/n')
        // get random line number
        randomN = Math.floor(Math.random() * splitWords.lenght) + 1;
        // get word on line
        randomL = splitWords[randomN]
        // call word
        var word = new Word(randomL);
        // call word.js function wordArray
        word.wordArray();
        // call displayWord to build displayString
        word.displayWord();
        // display initial string
        console.log(word.dsiplayString)
        // Run the game
        
    });
};
// Prompts the user for each guess and keeps track of the user's remaining guesses
function gamePlay(){
    inquirer
  .prompt([
    {
name: "character",
message: "Guess a letter, please.",
type: "input"
    }])
    .then(function(answer){
        // TO DO:check if user guess is correct. If not take a guess away. If so take a guess away and replace _ with letter
        // check if user guessed the right letter

        // check if user has any guesses left
    })
}