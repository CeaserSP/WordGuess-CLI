var Word = require("./Word.js");
var inquirer = require("inquirer")
var fs = require("fs");

// TO DO: SET Randomly selects a word and uses the `Word` constructor to store it. * Prompts the user for each guess and keeps track of the user's remaining guesses
function game() {
    // Read in words
    fs.readFile('./words.txt', function read(err, data) {
        if (err) {
            throw err;
        }
        // get random word
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
        game(word);
    });
};