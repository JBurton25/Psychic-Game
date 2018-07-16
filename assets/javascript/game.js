var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var previous = [];

var reset = function (){
    guessesLeft = 9
    previous = [];
}

document.onkeyup = function(event) {
   
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];



    if ((userGuess == computerGuess) && (guessesLeft !== 0)) {
        wins++;
        alert("Whoa! Are you David Blaine?")
        reset();
    } else if (guessesLeft === 0){
        losses++;
        reset();
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        previous.push(userGuess); 
    }

    var html = 
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guessesLeft + "</p>" + 
        "<p> letters left: " + previous + "</p>";

     document.querySelector('#game').innerHTML = html;
    
};