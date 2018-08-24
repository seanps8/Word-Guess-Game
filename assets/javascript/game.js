//create array of words
var diffSports = ['baseball', 'football', 'soccer', 'tennis', 'wrestling', 'hockey', 'basketball', 'curling']

//choose word randomly
var randNum = Math.floor(Math.random() * diffSports.length);
var rightWord = [];
var wrongWord = [];
var underNumber = [];
var winCount = 0;
var guessesLeft = 9;
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("correct");
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

var winner = function() {
    guessesLeft = 9;
    wrongWord = [];
    rightWord = [];
};

var loser = function() {
    alert("Game over -- You Lose");
    guessesLeft = 9;
    wrongWord = [];
    rightWord = [];
    winCount = 0;
}

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
                alert('You Win!');
                winCount++;
                var userWins = document.getElementById("count");
                userWins.innerHTML = winCount;
                winner();
            }
            console.log(rightWord);
        }
        else {
            wrongWord.push(userGuess);
            docWrongGuess[0].innerHTML = wrongWord;
            guessesLeft--;
            var userRemainingGuesses = document.getElementById("remaining");
            userRemainingGuesses.innerHTML = guessesLeft;
        }
        if (guessesLeft === 0) {
            loser();
        }
};


