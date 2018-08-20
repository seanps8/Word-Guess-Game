//create array of words
var diffSports = ['baseball', 'football', 'soccer', 'tennis', 'wrestling', 'hockey', 'basketball', 'curling']

//choose word randomly
var randNum = Math.floor(Math.random() * diffSports.length);
var rightWord = [];
var wrongWord = [];
var underNumber = [];
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("wins");
var docWrongGuess = document.getElementsByClassName("guessed");

var currentWord = diffSports[randNum];
console.log(currentWord);



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
    var userGuess = event.key;
// if user guess is right
    if (currentWord.indexOf(userGuess) > -1) {
        rightWord.push(userGuess);    
        underNumber[currentWord.indexOf(userGuess)] = userGuess;
        docUnderScore[0].innerHTML = underNumber.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        //see if user word matches guesses
        if(underNumber.join('') == currentWord) {
            alert('You Win!')
        }
        console.log(rightWord);
}
    else {
        wrongWord.push(userGuess);
        docWrongGuess[0].innerHTML = wrongWord;
}};

//underNumber[0].innerHTML = underAmount.join(' ');
