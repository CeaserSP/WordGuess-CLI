var letter = require("./Letter.js");
var Word = function (newWord) {
    // Use .split() on newWord to create an array of letters
    this.lArray = newWord.split('');
    // array of `new` Letter objects representing the letters of the underlying word
    this.wArray = [];
    // This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.wordArray = function () {
        for (var i = 0; i < this.lArray.lenth; i++) {
            // call letter function
            var wordObject = new letter(this.lArray[i]);
            // push wordObject into wArray
            this.wArray.push(wordObject);
        };
    };
    var displayString = ''
    // Display wArray
    this.displayWord = function () {
        for (var j = 0; j < this.wArray.length; j++) {
            // set varbiable for wArray objects
            var letterObjects = this.wArray[j];
            // call guessed from letter on letterObjects
            var displayLetterObjects = letterObjects.guessed();
            // push displayLetterObjects to a string variable
            displayString.push(displayLetterObjects)
        };
        // concatenate letterObjects
        var concatString = displayString.join(' ');
        //    display word
        this.concatWord = concatString;
    };
    // A function that takes a character from user as an argument and calls the guess function on each letter object
    this.checkGuess = function (userGuess) {
        // loop through wArray
        for (var k = 0; k < this.wArray.length; k++) {
            // set varbiable for wArray objects
            var checkLetter = this.wArray[k];
            // check if userGuess matches letter
            if (userGuess = checkLetter.character) {
                // run checkUp from Letter on userGuess
                checkLetter.checkUp(userGuess);
                // Update wArray
                this.wArray[k] = checkLetter;
            }
        };
        // Display
        this.displayWord();
    };
};
module.exports = Word;
// var testW = new Word("TImesheet");
// // console.log(testW.lArray);
// // console.log(testW.wordArray);
// // testW.wordArray();
// // console.log(testW.wArray);
// console.log(testW.displayWord());
