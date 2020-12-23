// global variables
var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector(".start-btn");
var startEl = document.querySelector("#start-div");
var currentScore = 0;
var counter = 0;

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
    a1: "1\r\n2\r\n3\r\n4",
    a2: "0\r\n1\r\n2\r\n3",
    a3: "'0'\r\n'1'\r\n'2'\r\n'3'",
    a4: "'1'\r\n'2'\r\n'3'\r\n'4'",
    correct: "0\r\n1\r\n2\r\n3"
}

var question8 = {
    q: "8. Which of the following creates a window with an 'OK' and 'Cancel' button?",
    code: "",
    a1: "window.confirm('Do you like hamburgers?');",
    a2: "window.alert('Do you like hamburgers?');",
    a3: "window.question('Do you like hamburgers?');",
    a4: "window.prompt('Do you like hamburgers?');",
    correct: "window.confirm('Do you like hamburgers?');"
}

var question9 = {
    q: "9. What will be printed in the console when the following code is run?",
    code: "var condition = '';\r\nif (condition) {\r\n  console.log('Deciduous trees');\r\n}\r\nelse {\r\n  console.log('Aurora Borealis');\r\n}",
    a1: "' '",
    a2: "Nothing",
    a3: "'Aurora Borealis'",
    a4: "'Deciciduous Trees'",
    correct: "'Aurora Borealis'"
}

var question10 = {
    q: "10. How do you retrieve an item from localStorage?",
    code: "",
    a1: "localStorage.getValue('storedValue');",
    a2: "localStorage.getItem('storedValue');",
    a3: "localStorage('storedValue');",
    a4: "localStorage.retrieveStorage('storedValue');",
    correct: "localStorage.getItem('storedValue');"
}

var question11 = {
    q: "",
    code: "",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    correct: ""
}

// Question array
var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

// Loop through questionArray
// Display question via createElement
// event listener for click
// check if selected matches correct
    // if matches, update score and display correct
    // if not, display incorrect
// At end display score
// allow user to input initials to save high score
// save score and initials to localStorage
// display all high scores

// start timer
// timer is green, turns red close to the end
// if timer runs out, end quiz

// compare selected answer to correct answer
// display 'correct' or 'incorrect'
/*
var compareAnswer = function(event, correctAnswer) {
    console.log(correctAnswer)
    if (event.target.textContent === correctAnswer) {
        console.log("Correct!");
    }
    else (
        console.log("Incorrect.")
    )
}*/

/*
// check question answer
var checkAnswer = function (correctAnswer, question) {
    question.addEventListener("click", function (event) {
        if (event.target.textContent === correctAnswer) {
            console.log("Correct!");
            currentScore++;
            document.getElementById("score").textContent = currentScore;
        }
        else {
            console.log("Incorrect.");
        }

        question.remove();
    }
    );
} */


// loop through array of questions
var startQuiz = function (event) {
    // remove start screen
    if (event.target === startBtnEl) {
        startEl.remove();
    }

    // loop through question array
    if (counter < questionArray.length) {
        // create div to hold question and options
        var questionDivEl = document.createElement("div");
        questionDivEl.setAttribute("id", counter);

        // question
        var questionEl = document.createElement("h2");
        questionEl.textContent = questionArray[counter].q;
        var questionCodeEl = document.createElement("div");
        questionCodeEl.className = "code-div";
        questionCodeEl.setAttribute('style', 'white-space: pre;');
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

        if (counter > 0) {
            if (event.target.textContent === questionArray[counter - 1].correct) {
                console.log("Correct!");
                currentScore++;
                document.getElementById("score").textContent = currentScore;
            }
            else {
                console.log("Incorrect.");
            }
            document.getElementById(counter - 1).remove();
        }

        counter++;
    }
}


mainEl.addEventListener("click", startQuiz)
