var answer = 0;
var count = 0;
var lastGuess = null;

function ranNum(){
    return Math.floor((Math.random() * 100) + 1);
}

function feedBack(correctAnswer, guess, previousGuess){
    var distance = Math.abs(correctAnswer - guess);

    if (distance == 0){
        $('#feedback').text("Yay, you win");
    } else if (previousGuess == null) {
       if (distance >= 50) {
           $('#feedback').text("Very Cold");
       } else if (distance > 20 && distance < 50) {
           $('#feedback').text("Cold");
       } else if (distance > 10 && distance <= 20) {
           $('#feedback').text("Hot");
       } else if (distance != 0) {
           $('#feedback').text("Very Hot");
       }
   } else {
       var previousDistance = Math.abs(correctAnswer - previousGuess);
       if (previousDistance > distance){
           $('#feedback').text("Warmer");
       } else if (distance > previousDistance){
           $('#feedback').text("Colder");
       }
   }
    return (distance == 0);
}

function getInput(){
    var userGuess = $('#userGuess').val();
    if (userGuess % 1 == 0) {
        return parseInt(userGuess);
    } else {
        return null;
    }
}

function newGame() {
    answer = ranNum();
    $('ul#guessList').children().remove();
    count = 0;
    $('#count').text(count);
    $('#feedback').text('Make your Guess!');
    $('#userGuess').val('');
}

function guessButton() {
    var guess = getInput();
    if (!isNaN(guess) && guess != null) {
        feedBack(answer, guess, lastGuess);
        count++;
        $('#count').text(count);
        $('ul#guessList').append("<li>" + guess + "</li>");
        lastGuess = guess;
    } else {
        alert("Please enter a whole number Between 1 and 100!")
    }
}

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $('#newGame').click(newGame);

    newGame();

    $('#guessButton').click(guessButton);
    $('form').submit(function(e) {
        e.preventDefault();
        guessButton();
    });
});
