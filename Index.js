var Word = require("./Word.js");
var inquirer = require("inquirer")
var fs = require("fs");

// TO DO: SET Randomly selects a word and uses the `Word` constructor to store it. * Prompts the user for each guess and keeps track of the user's remaining guesses
function Game() {
    // Read in words
    fs.readFile('./words.txt'), function read(err, data) {
        if (err) {
            throw err;
        }
            // get random word
    // split word.txt on line
    splitWords = data.split('/n')
    };
    
};