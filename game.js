var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence () {
    userClickedPattern = [];

    level++;

    $("h1").text("Level " + level);


    var randomNum =  Math.floor(Math.random() * 4);

    var randomChosenColors = buttonColors[randomNum];

   gamePattern.push(randomChosenColors);

   $("#" + randomChosenColors).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColors);
   
   
   
}

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkUserAnswer(userClickedPattern.length - 1);
  
});

function playSound(name) {
   var audio = new Audio ("sound/" + name + ".mp3")
audio.play();
 
};
 function animatePress (currentColor) {
    $("." + currentColor ).addClass("pressed")
 setTimeout(function(){
$("." + currentColor).removeClass("pressed")
 }, 100);
};

var started = false

var level = 0;

$("#power-btn").on("click",  function () {
    if (!started) {
        $("#level-title").text("Level " + level)
    nextSequence();
    started = true
    }
    
});

function checkUserAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000)
        }
    } else {
         playSound("wrong");
         $("body").addClass("game-over")
         setTimeout(function () {
                $("body").removeClass("game-over")
            }, 200)
         
         $("#level-title").text("Game Over, Press start to Restart")

         startOver();
    }
};
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}









