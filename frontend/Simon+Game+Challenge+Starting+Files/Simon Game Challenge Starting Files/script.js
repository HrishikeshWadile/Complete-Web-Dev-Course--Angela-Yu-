var sequence = [];
var userSequence = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var game_is_on = true;
var game_started = false;

function nextSequence() {
    userSequence = []; // Reset user sequence for the new round
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = buttonColor[randomNumber];
    sequence.push(randomColor);
    click(randomColor);
    console.log("Sequence: " + sequence);
    $("h1").text("Level " + sequence.length);
}

function click(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
    $("." + color).fadeOut(100).fadeIn(100);
}

function checkAnswer(currentIndex) {
    if (sequence[currentIndex] === userSequence[currentIndex]) {
        console.log("Correct");
        if (userSequence.length === sequence.length) {
            setTimeout(nextSequence, 1000); // Move to the next level
        }
    } else {
        console.log("Wrong");
        click("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        game_is_on = false;
        game_started = false; // Reset game_started to allow restart on keypress
    }
}

function gameStart() {
    sequence = [];
    userSequence = [];
    game_is_on = true;
    game_started = true;
    $("h1").text("Level 1");
    nextSequence();
}

$(".btn").click(function () {
    if (game_started) {
        var userClickedColor = $(this).attr("id");
        userSequence.push(userClickedColor);
        click(userClickedColor);
        checkAnswer(userSequence.length - 1); // Check the last clicked color
    }
});




$(document).keypress(function(e){
    if ((e.key === "a" || e.key === "A") && game_is_on && !game_started){
        gameStart();
    }
    else if (!game_is_on && !game_started){
        sequence = [];
        $("body").removeClass("game-over");
        game_is_on = true;
        gameStart();
    }
});

