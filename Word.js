var letter = require("./Letter.js");
var Word = function (newWord) {
    // Use .split() on newWord to create an array of letters
    this.lArray = newWord.split('');
    // array of `new` Letter objects representing the letters of the underlying word
    this.wArray = [];
    // TO DO:
    // string representing word. for loop calling letter.js for display of the string

}

