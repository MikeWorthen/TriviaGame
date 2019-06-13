$(document).ready(function() {
    
    //Show start button on screen when page loads  
      function startButton() {
          startScreen = "<p class='text-center main-button-container'><a class='btn btn-danger btn-lg start-button' href='#' role='button'>Start Quiz</a></p>";
          $(".mainContent").html(startScreen);
      }
      
      startButton();
      
      //Function to generate HTML
      
      $("body").on("click", ".start-button", function(event){
          generateHTML();
          timeRemaining();
      
      }); // Closes start-button click
      
      $("body").on("click", ".answer", function(event){
          //answeredQuestion = true;
          selectedAnswer = $(this).text();
          if(selectedAnswer === correctAnswers[questionCounter]) {
              clearInterval(theClock);
              generateWin();
          }
          else {``
              clearInterval(theClock);
              generateLoss();
          }
      }); // Close .answer click
      
      $("body").on("click", ".reset-button", function(event){
          resetGame();
      }); 
      
      }); 
      
      //Function to count a question as unanswered
      function generateLossDueToTimeOut() {
          unanswered++;
          gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
          $(".mainContent").html(gameHTML);
          setTimeout(wait, 2000);  
      }
      
      function generateWin() {
          correct++;
          gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! " + "<br><br>" + correctAnswers[questionCounter] + "</p>"; 
          $(".mainContent").html(gameHTML);
          setTimeout(wait, 2000);  
      }
      
      function generateLoss() {
          incorrect++;
          gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! " + "<br><br>" + "The correct answer is: "  + correctAnswers[questionCounter] + "</p>";
          $(".mainContent").html(gameHTML);
          setTimeout(wait, 2000); 
      }
      
      function generateHTML() {
          gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + questions[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. "+ answerArray[questionCounter][3] +  "</p>";
          $(".mainContent").html(gameHTML);
      }
      
      function wait() {
          if (questionCounter < 3) {
          questionCounter++;
          generateHTML();
          counter = 10;
          timeRemaining();
          }
          else {
              finalScreen();
          }
      }
      
      function timeRemaining() {
          theClock = setInterval(tenSeconds, 1000);
          function tenSeconds() {
              if (counter === 0) {
                  clearInterval(theClock);
                  generateLossDueToTimeOut();
              }
              if (counter > 0) {
                  counter--;
              }
              $(".timer").html(counter);
          }
      }
      
      function finalScreen() {
          gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>"  + 
                      "</span></p>" + "<p class='text-center'>The Results are in! Check your score totals below" + "</p>"
                      + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + 
                      incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + 
                      "<p class='text-center reset-button-container'><a class='btn btn-danger btn-lg reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
          $(".mainContent").html(gameHTML);
          if(correct === 4) {
              var oneHundred = "<p class='text-center'>Perfect Score!!! You really know your baseball! </p>" + "<br><br>" + "<p class='text-center'>4 for 4" + "</p>" 
              $(".mainContent").html(oneHundred);
          }
      }
      
      function resetGame() {
          questionCounter = 0;
          correct = 0;
          incorrect = 0;
          unanswered = 0;
          counter = 10;
          generateHTML();
          timeRemaining();
      }
      
      var startScreen;
      var gameHTML;
      var counter = 10;
      var questions = ["Who holds the single season home run record at 73?", 
                          "Which pitcher had no right hand and pitched in the Majors?", 
                          "What player holds the record for most hits in a season at 262 hits?", 
                          "During which inning is Take Me Out to the Ballgame traditionally sung?"];
      
      
      var answerArray = [["Barry Bonds", "Mark McGwire", "Sammy Sosa", "Babe Ruth"], 
                          ["Kevin Brown", "Nolan Ryan", "Randy Johnson", "Jim Abbott"], 
                          ["Darin Erstad", "Ichiro Suzuki", "Tony Gwynn", "Jose Altuve"], 
                          ["1st", "3rd", "7th", "8th"]];
  
  
      var correctAnswers = ["A. Barry Bonds", "D. Jim Abbott", "B. Ichiro Suzuki", "C. 7th"];
      var questionCounter = 0;
      var theClock;
      var correct = 0;
      var incorrect = 0;
      var unanswered = 0;ßå











     