var letter = require("./Letter.js");
var Word = function (newWord) {
    // Use .split() on newWord to create an array of letters
    this.lArray = newWord.split('');
    // array of `new` Letter objects representing the letters of the underlying word
    this.wArray = [];
    // This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    var wordArray = function () {
        for (var i = 0; i < lArray.lenth; i++) {
            // call letter function
            var wordObject = new letter(this.lArray[i]);
            // push wordObject into wArray
            this.wArray.push(wordObject);
        };
    };




}

