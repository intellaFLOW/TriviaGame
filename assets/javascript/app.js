$(document).ready(function() {
  var index = 0;
  var countdownTimer = {
    time : 30,
    reset: function() {
      this.time = 30;
      $('.timer').html('<h2>' + this.time + ' seconds remaining</h2>');
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);  
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
        countdownTimer.time--;
      if (countdownTimer.time >= 0) {
        $('.timer').html('<h2>' + countdownTimer.time + ' seconds remaining</h2>');
      }
      else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };

var correct = 0;
var wrong = 0;
var q1 = {
  question : 'Which villian did Harvey Dent become after leaving the hospital?',
  possibleAnswers : ['A. The Joker',
         'B. Bane',
         'C. The Scarecrow',
         'D. Two Face'],
  flags : [false, false, false, true],
  answer : 'D. Two Face'
};

var q2 = {
  question: "Before Heath Ledger was confirmed as 'The Joker', which of the following actors was also up for the role?",
  possibleAnswers: ['A. Leonardo Dicaprio',
         'B. Robin Williams',
         'C. Robert DeNiro',
         'D. Michael Keaton'],
  flags : [false, true, false, false],
  answer : 'B. Robin Williams'
};

var q3 = {
  question : 'The prequel to "The Dark Knight" is?',
  possibleAnswers : ['A. Batman Beyond',
         'B. Batman Begins',
         'C. Batman Forever',
         'D. Batman: Origins'],
  flags : [false, true, false, false],
  answer : 'B. Batman Begins'
};

var q4 = {
  question : 'True or False: Christian Bale is the only actor to portray "Batman" in a trilogy.',
  possibleAnswers : ['A. True',
         'B. False',
         'C. Maybe?',
         "D. Seriously... you know it's one of the first two answers"],
  flags : [true, false, false, false],
  answer : 'A. True'
};

var q5 = {
  question : "What is 'Batman's' real name?",
  possibleAnswers : ['A. John Wayne',
         'B. Marlon Wayans',
         'C. Bruce Wayne',
         'D. Shawn Wayans'],
  flags : [false, false, true, false],
  answer : 'C. Bruce Wayne'
};

var q6 = {
  question : "What is Harley Quinn's role in 'The Dark Knight' movie?",
  possibleAnswers : ["A.She's 'The Joker's' Girlfriend",
         'B. She blows up the hospital. ',
         "C. She is a part of the 'Police Parade'. ",
         'D. She has no role in this movie.'],
  flags : [false, false, false, true],
  answer : 'D. She has no role in this movie. '
};

var q7 = {
  question : "At the beginning of the movie we find a bunch of criminals in clown masks, led by the Joker, robbing a bank. Who owns the bank?" ,
  possibleAnswers : ['A. The City of Gotham',
         'B. Bruce Wayne',
         'C. The Mob ',
         'D. Clark Kent'],
  flags : [false, false, true, false],
  answer : 'C. The Mob'
};

var q8 = {
  question : "When The Joker proposes his idea for killing Batman, a man asks why he shouldn't have one of his boys rip his head off. What does the Joker do?",
  possibleAnswers : ["A. The Joker rips the man's head off. ",
         "B. The Joker shoves a pencil into the man's skull. ",
         'C. The Joker calls on Harley Quinn to seduce the man, before killing him.',
         'D. The Joker asks the man "Do you know how I got these scars?"'],
  flags : [false, true, false, false],
  answer : "B. The Joker shove's a pencil into the guy's skull. "
};

var q9 = {
  question : "What is the name of Harvey Dent's Girlfriend?",
  possibleAnswers : ['A. Diana Prince',
         'B. Selina Kyle',
         'C. Pamela Isley',
         'D. Rachel Dawes '],
  flags : [false, false, false, true],
  answer : 'D. Rachel Dawes '
};

var q10 = {
  question : "'You look like a man who takes himself too seriously... Do you want my opinion? You need to lighten up.' Which villian says this before lighting 'Batman' on fire?", 
  possibleAnswers : ['A. The Joker',
          'B. The Scarecrow',
          'C. The Riddler',
          'D. Bane'],
  flags : [false, true, false, false],
  answer : 'B. The Scarecrow'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
  countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
  index = 0;
  $('.question').append("<button id='startButton'>Let's Begin, Shall We?</button>");

  $('#startButton').on('click', function() {
    $(this).hide();
    countdownTimer.start();
      var audioBat = document.createElement("audio");
          audioBat.setAttribute("src", "assets/audio/batman.mp3");
    audioBat.play();
    loadQuestion(index);
  });
}   

function getAnswer() {
  $('.answerchoice').on('click', function() {
//    console.log('alert', index);
    index++;
//    console.log('click', index);
    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    loadQuestion();
  })
}

function answerCorrect() {
  correct++;
  alert("You either die a hero, or live long enough to see yourself become the villian.");
//  console.log("right answer");
}

function answerWrong() {
  wrong++;
//  alert("The correct answer was "+ answerCorrect());
  alert("It's a funny world we live in. Speaking of funny, do you know how I got these scars?");
//  console.log("wrong answer");
}

function showScore() {
  $('.question').empty();
  $('.question').append("<h2><p>" + correct + " correct</p></h2>");
  $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
  countdownTimer.stop();
  $('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
//   console.log($(this));
   if(this.id == 'buttonA') {
      var answerChosen = 'A';
     } else if(this.id == 'buttonB') {
      answerChosen = 'B';
     } else if (this.id == 'buttonC') {
      answerChosen = 'C';
     } else if (this.id == 'buttonD') {
      answerChosen = 'D';
    } 
       if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
        answerCorrect();
       } else if (answerChosen == 'A') {
        answerWrong();
       }
       if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
        answerCorrect();
       } else if (answerChosen == 'B') {
        answerWrong();
       }
      if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
        answerCorrect();
       } else if (answerChosen == 'C') {
        answerWrong();
       }
      if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
        answerCorrect();
       } else if (answerChosen == 'D') {
        answerWrong();
      }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
  index++;
   if (index < questionArray.length) {
    loadQuestion(index);
   } else {
    $(".answerchoice").hide();
    showScore();
   }

});

});
