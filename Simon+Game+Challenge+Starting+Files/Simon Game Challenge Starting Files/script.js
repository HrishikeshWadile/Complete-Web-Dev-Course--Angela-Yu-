var sequence =[];
var buttonColor = ["red", "blue", "green", "yellow"];
var game_is_on = true;
var game_started = false;
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    click(buttonColor[randomNumber]);
    sequence.push(buttonColor[randomNumber]);
    console.log(sequence);
}

function click(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
    $("." + color).fadeOut(100).fadeIn(100);
}

function checkAnswer(){
    if (sequence[sequence.length - 1] === $(".pressed").attr("id")){
        console.log("correct");
        click($(".pressed").attr("id"));
    }
    else{
        console.log("wrong");
        click("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
    }
}

function gameStart(){
    while (game_is_on){
        nextSequence();
        for (var i = 0; i < sequence.length; i++){
            
        }
    }
}

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

