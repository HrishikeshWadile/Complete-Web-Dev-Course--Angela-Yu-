var dict = {
    'w': 'tom-1',
    'a': 'tom-2',
    's': 'tom-3',
    'd': 'tom-4',
    'j': 'snare',
    'k': 'crash',
    'l': 'kick-bass'
};

function playSound(key) {
    var sound = dict[key];
    if (sound) {
        var audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// Keyboard event listener
document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase();
    playSound(key);
    buttonAnimation(key);
});

// Button click event listeners
var drums = document.querySelectorAll(".drum");
drums.forEach(function(drum) {
    drum.addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});