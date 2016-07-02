var answer = 0;
var count = 0;

function ranNum(){
    var genNum = Math.floor((Math.random() * 100) + 1);
    return genNum;
}

function feedBack(correctAnswer, guess){
    var distance = Math.abs(correctAnswer - guess);
    if (distance >= 50){
        $('#feedback').text("Very Cold");
    } else if (distance > 20 && distance < 50){
        $('#feedback').text("Cold");
    } else if (distance > 10 && distance <= 20){
        $('#feedback').text("Hot");
    }else if (distance != 0){
        $('#feedback').text("Very Hot");
    } else {
        $('#feedback').text("Yay, You Win!");
    }

    return (distance == 0);
}

function getInput(){
    var userGuess = $('#userGuess').val();
    return parseInt(userGuess);
}

function newGame() {
    answer = ranNum();
}

function guessButton() {
    var guess = getInput();
    feedBack(answer, guess);
    count++;
    $('#count').text(count);
    $('ul#guessList').append("<li>" + guess + "</li>");
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

    $('#newGame').click(function () {
        newGame();
    });

    $('#guessButton').click(guessButton);

    $('form').keypress(function(e) {
        if (e.keyCode == 13) {
            guessButton();
        }
    })
});
