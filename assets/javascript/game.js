//create array of words
var diffSports = ['Baseball', 'Football', 'Soccer', 'Tennis', 'Wrestling', 'Hockey', 'Basketball', 'Curling']

//choose word randomly
var randNum = Math.floor(Math.random() * diffSports.length);

var currentWord = diffSports[randNum];
console.log(currentWord);

var underNumber = [];

//create underscores based on length of word
var underAmount = function() {
    for(var i = 0; i < currentWord.length; i++) {
        underNumber.push('_');
    }
    return underNumber;
};

console.log(underAmount());

//user guess
document.onkeyup = function(event) {
    userGuess = event.key;
};
console.log(userGuess);