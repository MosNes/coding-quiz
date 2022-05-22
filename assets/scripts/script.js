//all sample questions taken from https://www.interviewbit.com/javascript-mcq/

//--------GLOBAL VARIABLES---------

//function to check local storage for high scores
var getHighScores = function(){

    highScores = localStorage.getItem("scores");
    //if getting scores doesn't return anything, create an empty array and save an empty array to localStorage
    if (!highScores) {
        localStorage.setItem("scores","[]");
        highScores = [];
    }
    //else parse the array in local storage
    else {
        highScores = JSON.parse(highScores);
    }

    return highScores;
}

//import high scores from Local Storage
var highScores = getHighScores();

//creates variable to hold user's current score
var score = 0;

//creates variable for the timer in seconds
var timerCount = 75;

//creates a variable to determine the starting question number
var questionNumber = 1;

//selects the existing current-card container in the HTML
var currentCardHolder = document.getElementById("current-card");

//sets answer feedback as a global variable that can be referenced later when user answers questions correctly or incorrectly
var answerFeedback = "";

//object that contains all the types of cards that can be displayed
var cardObjects = {
    quizStartCard: {
        id: "quiz-start",
        el1: "<h1>Coding Quiz</h1>",
        el2: "<p>You have 75 seconds to complete the quiz. Keep in mind that incorrect answers will penalize you by removing 10 seconds from the timer.</p>",
        el3: '<button class="button" id="quiz-start-btn">Start Quiz</button>'
    },
    quizEndCard: {
        id:"quiz-end-card",
        el1: "<h3>All Done!</h3>",
        el2: "",
        el3: "<form><label for='initials'>Enter Your Initials: </label><input type='text' id='initials' name='initials'><br><div class='submit-wrapper'><button class='button' id='form-submit'>Submit</button></div></form>"
    },
    highScoreCard: {
        id:"high-score-card",
        el1: "<h1>High Scores</h1>",
        el2: "",
        el3: ""
    },
    quizCards: {
        //answer property is the index of the correct answer in the array
        question1: {
            type: "question",
            id:"question1",
            el1: "<h3>JavaScript is a _____ language?</h3>",
            el2: ["Object-Oriented","Object-Based","Procedural","None of These"],
            el3: "",
            answer: 0
        },
        question2: {
            type: "question",
            id:"question2",
            el1: "<h3>Which of the following keywords is used to define a variable in Javascript?</h3>",
            el2: ["var","let","Both A and B","None of The Above"],
            el3: "",
            answer: 2
        },
        question3: {
            type: "question",
            id:"question3",
            el1: "<h3>Which of the following methods is used to access HTML elements using Javascript?</h3>",
            el2: ["getElementById()","getElementByTag()","getElementsByClassName()","Both A and C"],
            el3: "",
            answer: 3
        },
        question4: {
            type: "question",
            id:"question4",
            el1: "<h3>Upon encountering empty statements, what does the Javascript Interpreter do?</h3>",
            el2: ["Throws an Error","Ignores the Statements","Gives a Warning","None of the Above"],
            el3: "",
            answer: 1
        },
        question5: {
            type: "question",
            id:"question5",
            el1: "<h3>Which of the following methods can be used to display data in some form using Javascript?</h3>",
            el2: ["document.write()","console.log()","window.alert()","All of the Above"],
            el3: "",
            answer: 3
        },
        question6: {
            type: "question",
            id:"question6",
            el1: "<h3>How can a datatype be declared to be a constant type?</h3>",
            el2: ["const","var","let","constant"],
            el3: "",
            answer: 0
        },
        question7: {
            type: "question",
            id:"question7",
            el1: "<h3>What will be the output of the following code snippet?</h3><div class='code'>let a = 5 + '9';<br>document.write(a);</div>",
            el2: ["Compliation Error","14","Runtime Error","59"],
            el3: "",
            answer: 3
        },
        question8: {
            type: "question",
            id:"question8",
            el1: "<h3>What will be the output of the following code snippet?</h3><div class='code'>var a = 'Scaler';<br>var result = a.substring(2,4);<br>document.write(result);</div>",
            el2: ["al","ale","cal","caler"],
            el3: "",
            answer: 1
        }
    }
};

//creates a variable that holds the total number of questions in the quizCards object
var totalQuestions = Object.keys(cardObjects.quizCards).length;

//example card to use with CSS to test styling
// var quizStartCard = {
//     type: "quiz-start",
//     el1: "<h1>Coding Quiz</h1>",
//     el2: "<p>You have 75 seconds to complete the quiz. Keep in mind that incorrect answers will penalize you by removing 10 seconds from the timer.</p>",
//     el3: '<button class="button" id="quiz-start-btn">Start Quiz</button>'
// }


//--------FUNCTIONS---------


//function to create a blank card element
var createCardEl = function() {
    //create the div to  hold the card's elements
    cardEl = document.createElement("div");
    cardEl.setAttribute("class","card");
    //create the three sub element containers
    el1 = document.createElement("div");
    el1.setAttribute("class","el1");
    el2 = document.createElement("div");
    el2.setAttribute("class","el2");
    el3 = document.createElement("div");
    el3.setAttribute("class","el3");
    //add 3 elements to card element
    cardEl.appendChild(el1);
    cardEl.appendChild(el2);
    cardEl.appendChild(el3);
    return cardEl;
};

//function to format a non-question card element
var createCard = function(cardObject) {
    cardEl = createCardEl();
    //create the 3 elements of each card
    el1.innerHTML = cardObject.el1;
    el2.innerHTML = cardObject.el2;
    el3.innerHTML = cardObject.el3;
    
    if (cardObject.id === "quiz-start"){
        cardEl.setAttribute("id",cardObject.id);
    }
    else if (cardObject.id === "quiz-end-card"){
        cardEl.setAttribute("id",cardObject.id);
        el2.innerHTML = "<p>Your final score is "+score+"<p>";
    }  
    else if (cardObject.id === "high-score-card"){
        cardEl.setAttribute("id",cardObject.id);
    }

    currentCardHolder.appendChild(cardEl);
};

//function to format a quiz question card
var createQuestionCard = function(cardObject) {
    var cardEl = createCardEl();

    //create question inside of el1
    el1.innerHTML = cardObject.el1;

    //create ul element inside of el2 to hold the answers
    var unorderedListEl = document.createElement("ul");
    el2.appendChild(unorderedListEl);
    
    //create list element and button for each answer
    for (var i = 0; i < cardObject.el2.length; i++) {
        var answerButton = document.createElement("button");
        var listEl = document.createElement("li");
        answerButton.textContent = cardObject.el2[i];
        answerButton.setAttribute("class","button");
        //sets the ID of each button equal to answer-index
        answerButton.setAttribute("id","answer-"+i);
        listEl.appendChild(answerButton);
        unorderedListEl.appendChild(listEl);
    }

    //add the feedback text if present
    el3.textContent = answerFeedback;

    //add the fully constructed card to the card holder
    currentCardHolder.appendChild(cardEl);

    //selects the answer button that contains the correct answer
    //has to be done after the elements have been appended to the DOM above, or else it returns null
    var correctAnswer = document.getElementById("answer-"+cardObject.answer);

    //flags that button as correct using by adding data-answer=correct data attribute
    correctAnswer.setAttribute("data-answer","correct");

};

//function to remove the current card from the card holder element
var removeCard = function() {
    currentCardHolder.removeChild(cardEl);
};

//function to stop quiz and go to the quiz end card
var stopQuiz = function (){
    score = score+(timerCount*10);
    removeCard();
    createCard(cardObjects.quizEndCard);
}

//function to start timer

//function to stop quiz if timer reaches zero

//event handler for buttons in each card
var cardClickHandler = function(event){
    //capture the Id of the element that was clicked
    targetId = event.target.getAttribute("id");

    //start the quiz if the start button is clicked
    if (targetId === "quiz-start-btn") {
        removeCard();
        createQuestionCard(cardObjects.quizCards.question1);
        return;
    }
    //moves to the next question if an answer is clicked
    else if (targetId === "answer-0" || targetId === "answer-1" || targetId === "answer-2" || targetId === "answer-3") {
        //increments the question number up by one if under the total # of questions
        if (questionNumber<totalQuestions) {
            questionNumber++;
        }
        //moves to the quiz end card if on the last question
        else if (questionNumber === totalQuestions){
            stopQuiz();
            return;
        }
        //if the answer is correct, add 10pts to the score and set answerFeedback to correct, so it will display on the next card
        if (event.target.getAttribute("data-answer")==="correct"){
            score+=10;
            answerFeedback = "Correct!";
        }
        //if answer is incorrect, set answerFeedback to Incorrect and subtract 10 seconds from timer
        else {
            answerFeedback = "Incorrect.";
            timerCount -= 10;
        }
        //removes the current card
        removeCard();
        //creates the next card using the question number
        createQuestionCard(cardObjects.quizCards["question"+questionNumber]);
    }
};

//handles form submit events from the quiz end card to save high scores
var submitHandler = function(event){
    //prevents browser from refreshing on submit
    event.preventDefault();
    //gets user initials from the input field
    var initialsInput = document.getElementById("initials").value;
    //constructs a high score object using the user's initials and score
    var highScoreObj = {
        initials: initialsInput,
        score: score
    };
    //adds the user's highScoreObj to the existing highScores array
    highScores.push(highScoreObj);
    //converts current highScores array into a string and saves it to localStorage, overwriting any previous score arrays
    localStorage.setItem("scores",JSON.stringify(highScores));
    //removes quiz end card and displays the high score card
    removeCard();
    createCard(cardObjects.highScoreCard);
}


//--------INITIALIZATION CODE---------

//creates the starting card
createCard(cardObjects.quizEndCard);

//test creation of other cards
// createQuestionCard(cardObjects.quizCards.question2);

//click event listener
currentCardHolder.addEventListener("click",cardClickHandler);

currentCardHolder.addEventListener("submit",submitHandler);

//form submit event listener for high score form

