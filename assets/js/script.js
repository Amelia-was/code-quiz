// global variables
var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector(".start-btn");
var startEl = document.querySelector("#start-div");
var quizHeaderEl = document.querySelector(".quiz-header");
var scoreDivEl = document.querySelector(".score-div");
var currentScoreEl = document.querySelector(".current-score");
var scoreSpanEl = document.querySelector("#score");
var timerEl = document.querySelector(".timer");
var scoreTrackerEl = document.getElementById("score-tracker");
var scoreTrackerSections = scoreTrackerEl.children;
var currentScore = 0;
var counter = 0;
var timeLeft = 359;

// get highscores from localStorage
var highscores = localStorage.getItem("scores");
if (!highscores) {
    highscores = [];
}
else {
    highscores = JSON.parse(localStorage.getItem("scores"));
}

// Questions
var question1 = {
    q: "1. Which is an example of a semantic HTML element?",
    code: "",
    a1: "<div>This is my website</div>",
    a2: "<header>This is my website</header>",
    a3: "<primary>This is my website</primary>",
    a4: "<h1>This is my website</h1>",
    correct: "<header>This is my website</header>"
}

var question2 = {
    q: "2. In the following style declaration, which value refers to the right-hand margin?",
    code: "div {\r\n  margin: 10px 20px 30px 40px;\r\n}",
    a1: "10px",
    a2: "20px",
    a3: "30px",
    a4: "40px",
    correct: "20px"
}

var question3 = {
    q: "3. What is the proper way to set alternate text for an image element?",
    code: "",
    a1: "<img src='picture.jpg' alt='This is my alternate text' />",
    a2: "<img src='picture.jpg' text='This is my alternate text' />",
    a3: "<img src='picture.jpg' img='This is my alternate text' />",
    a4: "<img src='picture.jpg' caption='This is my alternate text' />",
    correct: "<img src='picture.jpg' alt='This is my alternate text' />"
}

var question4 = {
    q: "4. What does the following code mean?",
    code: ".btn:hover {\r\n  background-color: #000000;\r\n}",
    a1: "When any button is hovered over, the background color of the button changes to #000000",
    a2: "When any button of class 'btn' is clicked, its background color changes to #000000",
    a3: "When any button of id 'btn' is hovered over, its background color changes to #000000",
    a4: "When any button of class 'btn' is hovered over, its background color changes to #000000",
    correct: "When any button of class 'btn' is hovered over, its background color changes to #000000"
}

var question5 = {
    q: "5. True or False: Data stored in sessionStorage will persist after the window is closed.",
    code: "",
    a1: "True",
    a2: "False",
    a3: "",
    a4: "",
    correct: "False"
}

var question6 = {
    q: "6. What will be printed in the console when the following code is run?",
    code: "if ('hello') {\r\n  console.log('Apples');\r\nelse {\r\n  console.log('Bananas');\r\n}",
    a1: "Nothing",
    a2: "'hello'",
    a3: "'Apples'",
    a4: "'Bananas'",
    correct: "'Apples'"
}

var question7 = {
    q: "7. What will be printed in the console when the following code is run?",
    code: "for (var i = 0; i < 4; i++) {\r\n  console.log(i);\r\n}",
    a1: "1 2 3 4",
    a2: "0 1 2 3",
    a3: "'0' '1' '2' '3'",
    a4: "'1' '2' '3' '4'",
    correct: "0 1 2 3"
}

var question8 = {
    q: "8. Where is the correct place to link a stylesheet?",
    code: "",
    a1: "At the top of the <body> tag",
    a2: "At the bottom of the <body> tag",
    a3: "Between the <head> tags",
    a4: "Between the <title> tags",
    correct: "Between the <head> tags"
}

var question9 = {
    q: "9. Where should <script> tags be placed?",
    code: "",
    a1: "At the bottom of the <body> tag",
    a2: "Between the <head> tags",
    a3: "At the top of the <body> tag",
    a4: "Between the <title> tags",
    correct: "At the bottom of the <body> tag"
}

var question10 = {
    q: "10. Which of the following creates a window with an 'OK' and 'Cancel' button?",
    code: "",
    a1: "window.confirm('Do you like hamburgers?');",
    a2: "window.alert('Do you like hamburgers?');",
    a3: "window.question('Do you like hamburgers?');",
    a4: "window.prompt('Do you like hamburgers?');",
    correct: "window.confirm('Do you like hamburgers?');"
}

var question11 = {
    q: "11. What will be printed in the console when the following code is run?",
    code: "var condition = '';\r\nif (condition) {\r\n  console.log('Deciduous trees');\r\n}\r\nelse {\r\n  console.log('Aurora Borealis');\r\n}",
    a1: "' '",
    a2: "Nothing",
    a3: "'Aurora Borealis'",
    a4: "'Deciciduous Trees'",
    correct: "'Aurora Borealis'"
}

var question12 = {
    q: "12. How do you retrieve an item from localStorage?",
    code: "",
    a1: "localStorage.getValue('storedValue');",
    a2: "localStorage.getItem('storedValue');",
    a3: "localStorage('storedValue');",
    a4: "localStorage.retrieveStorage('storedValue');",
    correct: "localStorage.getItem('storedValue');"
}

var question13 = {
    q: "13. What is the proper way to link a stylesheet?",
    code: "",
    a1: "<link href='stylesheet' rel='style.css' />",
    a2: "<link rel='stylesheet' href='style.css' />",
    a3: "<link type='stylesheet' src='style.css' />",
    a4: "<link rel='style.css' />",
    correct: "<link rel='stylesheet' href='style.css' />"
}


var question14 = {
    q: "14. Which is a proper class declaration?",
    code: "",
    a1: ".my-class {\r\n  color: #000000\r\n}",
    a2: "class='my-class' {\r\n  color: #000000\r\n}",
    a3: "#my-class {\r\n  color: #000000\r\n}",
    a4: "class:my-class {\r\n  color: #000000\r\n}",
    correct: ".my-class {\r\n  color: #000000\r\n}"
}

var question15 = {
    q: "15. Which of the following is an example of a pseudo-class?",
    code: "",
    a1: "hover {\r\n  color: #FFFFFF\r\n}",
    a2: ".hover {\r\n  color: #FFFFFF\r\n}",
    a3: "a .hover {\r\n  color: #FFFFFF\r\n}",
    a4: "a:hover {\r\n  color: #FFFFFF\r\n}",
    correct: "a:hover {\r\n  color: #FFFFFF\r\n}"
}

var question16 = {
    q: "16. Which of the following is the universal selector?",
    code: "",
    a1: ":root",
    a2: "*",
    a3: "body",
    a4: "html",
    correct: "*"
}

var question17 = {
    q: "17. What will the following code produce on the webpage?",
    code: "var newDiv = document.createElement('div');\r\nnewDiv.textContent = '<strong>Inertia is a property of matter</strong>';\r\ndocument.body.appendChild(newDiv);",
    a1: "A div containing the bolded text 'Inertia is a property of matter'",
    a2: "A div containing the text 'Inertia is a property of matter'",
    a3: "A div containing the text '<strong>Inertia is a property of matter</strong>'",
    a4: "An empty div",
    correct: "A div containing the text '<strong>Inertia is a property of matter</strong>'"
}

var question18 = {
    q: "18. What will the following code produce on the webpage?",
    code: "var someText = document.createElement('p');\r\nsomeText.textContent = 'It was the best of times; it was the worst of times.';\r\nvar newDiv = document.createElement('div');\r\nnewDiv.appendChild(someText);",
    a1: "A div containing an empty <p> element",
    a2: "An empty div",
    a3: "Nothing; the div was not appended to the document",
    a4: "A div containing a <p> element with the text 'It was the best of times; it was the worst of times.'",
    correct: "Nothing; the div was not appended to the document"
}

var question19 = {
    q: "19. Which of the following is a JavaScript object?",
    code: "",
    a1: "var newBook = {title: 'The BFG'};",
    a2: "var newBook = 'The Cat in the Hat';",
    a3: "var newBook = ['title', 'Winnie the Pooh'];",
    a4: "var newBook = [title: 'The Gruffalo'];",
    correct: "var newBook = {title: 'The BFG'};"
}

var question20 = {
    q: "20. What is the proper way to style all <button> and all <a> elements?",
    code: "",
    a1: "a button {\r\n  border: 2px\r\n}",
    a2: "a:button {\r\n  border: 2px\r\n}",
    a3: "button, a {\r\n  border: 2px\r\n}",
    a4: "button a {\r\n  border: 2px\r\n}",
    correct: "button, a {\r\n  border: 2px\r\n}"
}

// Question array
var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20];

// load high score table
var loadScores = function () {
    var highscoresDivEl = document.createElement("div");
    highscoresDivEl.className = "highscores-div";
    var highscoresEl = document.createElement("ul");
    highscoresEl.className = "scores";
    
    // create high scores list
    var scoreListHeaderEl = document.createElement("li");
    var scoresHeadingEl = document.createElement("h2");
    scoresHeadingEl.textContent= "High Scores"
    scoreListHeaderEl.appendChild(scoresHeadingEl);

    highscoresEl.appendChild(scoreListHeaderEl);

    // iterate over highscores and append to high scores list
    for (var i = 0; i < highscores.length; i++) {
        var score = document.createElement("li");
        score.textContent = highscores[i].name + ": " + highscores[i].score;
        highscoresEl.appendChild(score);
    }

    // append highscores to highscoresDivEl
    highscoresDivEl.appendChild(highscoresEl);

    // create play again/clear buttons
    var buttonsDivEl = document.createElement("div");
    buttonsDivEl.className = "end-buttons";
    var playAgainButtonEl = document.createElement("button");
    playAgainButtonEl.textContent = "Play again"
    playAgainButtonEl.setAttribute("id", "play-again")
    playAgainButtonEl.className = "end-button";
    var clearScoresButtonEl = document.createElement("button");
    clearScoresButtonEl.textContent = "Clear scores";
    clearScoresButtonEl.setAttribute("id", "clear-scores");
    clearScoresButtonEl.className = "end-button";

    buttonsDivEl.appendChild(playAgainButtonEl);
    buttonsDivEl.appendChild(clearScoresButtonEl);
    
    // append to highscoresDivEl and then mainEl
    highscoresDivEl.appendChild(buttonsDivEl);
    mainEl.appendChild(highscoresDivEl);
}

// end quiz and save score
var endQuiz = function () {
    //clearInterval();

    // create div for end quiz info/form
    var endQuizDivEl = document.createElement("div");

    // append quiz score
    var endQuizMessageEl = document.createElement("h2");
    endQuizMessageEl.innerHTML = "Well done! You have completed the quiz.<br>Your final score is: " + currentScore;
    endQuizMessageEl.className = "well-done";

    endQuizDivEl.appendChild(endQuizMessageEl);
    mainEl.appendChild(endQuizDivEl);

    // create form to enter name
    var enterScoreEl = document.createElement("div");
    var enterMessageEl = document.createElement("p");
    enterMessageEl.textContent = "Enter your name to save your score!";

    var inputFormEl = document.createElement("form");
    inputFormEl.className = "input-form";
    var scoreInputEl = document.createElement("input");
    scoreInputEl.setAttribute("type", "text");
    scoreInputEl.setAttribute("name", "name");
    var submitButtonEl = document.createElement("button");
    submitButtonEl.textContent = "Submit";
    submitButtonEl.setAttribute("type", "submit");
    submitButtonEl.setAttribute("id", "submit-score")

    inputFormEl.appendChild(scoreInputEl);
    inputFormEl.appendChild(submitButtonEl);

    // append form to div then div to main
    enterScoreEl.appendChild(enterMessageEl);
    enterScoreEl.appendChild(inputFormEl);

    endQuizDivEl.appendChild(enterScoreEl);

    // listener for form submit
    enterScoreEl.addEventListener("submit", function (event) {
        // prevent page reload
        event.preventDefault();

        // save score and name into object
        var nameEntered = document.querySelector("input[name='name']").value;

        // check if name is blank
        if (!nameEntered) {
            window.alert("Please enter a valid name.");
        }
        else {
            // save name and score as object
            var highscoreObj = {
                name: nameEntered,
                score: currentScore
            };

            // push highscore object to array and save to localStorage
            highscores.push(highscoreObj);
            localStorage.setItem("scores", JSON.stringify(highscores));

            // clear form and load scores
            mainEl.removeChild(endQuizDivEl);
            quizHeaderEl.style.display = "none";
            loadScores();
        };
    })
}


// quiz timer
var quizTimer = function (event) {
    if (event.target === startBtnEl) {

        // display timer counting down from 5 minutes
        var timeInterval = setInterval(function () {
            var minutes = Math.floor(timeLeft / 60);
            var seconds = timeLeft % 60;

            if (timeLeft <= 15) {
                timerEl.style.color = "var(--accent)";
            }

            if (seconds < 10 && seconds >= 0) {
                timerEl.textContent = minutes + ":0" + seconds;
                timeLeft--;
            }
            else if (timeLeft > 0) {
                timerEl.textContent = minutes + ":" + seconds;
                timeLeft--;
            }
            else {
                clearInterval(timeInterval);
                timerEl.textContent = "0:00";
                var isQuestion = document.getElementById(counter - 1);
                if (isQuestion) {
                    isQuestion.remove();
                }
                endQuiz();
            }
        }, 1000);
    }
}


// loop through array of questions
var startQuiz = function (event) {
    // remove start screen
    if (event.target === startBtnEl) {
        startEl.remove();

        // reset score tracker and make visible
        for (let i = 0; i< scoreTrackerSections.length; i++) {
            scoreTrackerSections[i].className = "score-tracker-section";
            scoreTrackerSections[i].setAttribute("alt", "Incomplete");
        }
        
        // make quiz header visible
        quizHeaderEl.style.display = "block";
        scoreDivEl.style.display = "flex";
    }

    // check answer, update score, and remove previous question
    if (counter > 0 && event.target.className === "option") {
        var prevQ = scoreTrackerSections[counter - 1];
        if (event.target.textContent === questionArray[counter - 1].correct) {
            prevQ.className += " track-correct";
            prevQ.setAttribute("alt", "Correct");
            currentScore++;
            scoreSpanEl.textContent = currentScore;
        }
        else {
            timeLeft -= 10;
            prevQ.setAttribute("alt", "Incorrect");
            prevQ.className += " track-incorrect";
        }
        document.getElementById(counter - 1).remove();
    }

    if (counter === questionArray.length) {
        timeLeft = -1;
    }

    if (counter < questionArray.length) {
        // loop through question array
        if (event.target === startBtnEl || event.target.className === "option") {
            // create div to hold question and options
            var questionDivEl = document.createElement("div");
            questionDivEl.setAttribute("id", counter);

            // question
            var questionEl = document.createElement("h2");
            questionEl.textContent = questionArray[counter].q;
            var questionCodeEl = document.createElement("div");
            questionCodeEl.className = "code-div";
            questionCodeEl.textContent = questionArray[counter].code;

            // options
            var option1El = document.createElement("button");
            option1El.className = "option";
            option1El.textContent = questionArray[counter].a1;

            var option2El = document.createElement("button");
            option2El.className = "option";
            option2El.textContent = questionArray[counter].a2;

            var option3El = document.createElement("button");
            option3El.className = "option";
            option3El.textContent = questionArray[counter].a3;

            var option4El = document.createElement("button");
            option4El.className = "option";
            option4El.textContent = questionArray[counter].a4;

            // append question and options to questionDivEl
            questionDivEl.appendChild(questionEl);
            // only append if textContent is not empty
            if (questionCodeEl.textContent !== "") {
                questionDivEl.appendChild(questionCodeEl);
            }
            questionDivEl.appendChild(option1El);
            questionDivEl.appendChild(option2El);
            if (option3El.textContent !== "") {
                questionDivEl.appendChild(option3El);
            }
            if (option4El.textContent !== "") {
                questionDivEl.appendChild(option4El);
            }

            // append questionDivEl to mainEl
            mainEl.appendChild(questionDivEl);

            counter++;
        }
    }
}

// clear highcores
var clearScores = function(event) {
    if (event.target.id === "clear-scores") {
        // check if there are any scores
        var isScores = document.querySelector(".scores");
        if (isScores) {
            isScores.remove();
        }

        // update highscores
        highscores = [];
        localStorage.setItem("scores", highscores);

        // remove clear scores button
        document.getElementById("clear-scores").remove();
    }
}

// play again
var playAgain = function(event) {
    if (event.target.id === "play-again") {
        // reset global variables
        counter = 0;
        currentScore = 0;
        timeLeft = 359;
        scoreSpanEl.textContent = currentScore
        timerEl.textContent = "6:00";
        timerEl.style.color = "var(--secondary)";

        // remove scores
        var isScores = document.querySelector(".scores");
        if (isScores) {
            isScores.remove();
        }
        mainEl.lastElementChild.remove();

        // append start screen to mainEl
        mainEl.appendChild(startEl);
    }
}

// event listeners
// listener for start quiz
mainEl.addEventListener("click", startQuiz);

// listener for timer
mainEl.addEventListener("click", quizTimer);

// listener for clear scores button
mainEl.addEventListener("click", clearScores);

// listener for play again button
mainEl.addEventListener("click", playAgain);
