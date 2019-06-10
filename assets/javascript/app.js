

//Questions and Answers
var questions = ["Who holds the single season home run record at 73?"];
var answer = ["Barry Bonds"];
var firstQuestion = ["Barry Bonds", "Mark McGwire", "Sammy Sosa", "Babe Ruth"];

//Timer
var timer = $("#timer");
var count = 10;
var time = 0;



//Display Question and Options
function displayQuestion() {
    $("#question").text(questions[0]);
    $("#option1").text(firstQuestion[0]);
    $("#option2").text(firstQuestion[1]);
    $("#option3").text(firstQuestion[2]);
    $("#option4").text(firstQuestion[3]);
};


//On Click functions
$("#option1").on("click",)
$("#option2").on("click",)
$("#option3").on("click",)
$("#option4").on("click",)



//Start Game
$(".start").on("click", function() {
    startGame();
    displayTimer();
});

function startGame () {
    $(".start").hide();
    displayQuestion();
};



//Start Timer
function displayTimer() {
        timer.html(count);

        function timeIt () {
            count--;
            timer.html(count);
            if(count <= time) {
                clearInterval(interval);
                //figure out how to go to the next question after hitting 0
            }
        }

        var interval = setInterval(timeIt, 1000);
};


//Stop Timer


//Reset Timer
function resetTimer() {
    count = 10;
}











     