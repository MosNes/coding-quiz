//all sample questions taken from https://www.interviewbit.com/javascript-mcq/

//creates variable to hold user's current score
var score = 0;

//selects the existing current-card container in the HTML
var currentCardHolder = document.getElementById("current-card");

//object that contains all the types of cards that can be displayed
var cardObjects = {
    quizStartCard: {
        type: "quiz-start",
        el1: "<h1>Coding Quiz</h1>",
        el2: "<p>You have 75 seconds to complete the quiz. Keep in mind that incorrect answers will penalize you by removing 10 seconds from the timer.</p>",
        el3: '<button class="button" id="quiz-start-btn">Start Quiz</button>'
    },
    quizEndCard: {
        id:"quiz-end-card",
        el1: "",
        el2: "",
        el3: ""
    },
    highScoreCard: {
        id:"high-score-card",
        el1: "",
        el2: "",
        el3: ""
    },
    quizCards: {
        //answer property is the index of the correct answer in the array
        question1: {
            type: "question",
            id:"question1",
            el1: "<h3>1. JavaScript is a _____ language?</h3>",
            el2: ["Object-Oriented","Object-Based","Procedural","None of These"],
            el3: "",
            answer: 0
        },
        question2: {
            type: "question",
            id:"question2",
            el1: "<h3>2. Which of the following keywords is used to define a variable in Javascript?</h3>",
            el2: ["var","let","Both A and B","None of The Above"],
            el3: "",
            answer: 2
        },
        question3: {
            type: "question",
            id:"question3",
            el1: "<h3>3. Which of the following methods is used to access HTML elements using Javascript?</h3>",
            el2: ["getElementById()","getElementByTag()","getElementsByClassName()","Both A and C"],
            el3: "",
            answer: 3
        },
        question4: {
            type: "question",
            id:"question4",
            el1: "<h3>4. Upon encountering empty statements, what does the Javascript Interpreter do?</h3>",
            el2: ["Throws an Error","Ignores the Statements","Gives a Warning","None of the Above"],
            el3: "",
            answer: 1
        },
        question5: {
            type: "question",
            id:"question5",
            el1: "<h3>5. Which of the following methods can be used to display data in some form using Javascript?</h3>",
            el2: ["document.write()","console.log()","window.alert()","All of the Above"],
            el3: "",
            answer: 3
        },
        question6: {
            type: "question",
            id:"question6",
            el1: "<h3>6. How can a datatype be declared to be a constant type?</h3>",
            el2: ["const","var","let","constant"],
            el3: "",
            answer: 0
        },
        question7: {
            type: "question",
            id:"question7",
            el1: "<h3>7. What will be the output of the following code snippet?</h3><div class='code'>let a = 5 + '9';<br>document.write(a);</div>",
            el2: ["Compliation Error","14","Runtime Error","59"],
            el3: "",
            answer: 3
        },
        question8: {
            type: "question",
            id:"question8",
            el1: "<h3>8. What will be the output of the following code snippet?</h3><div class='code'>var a = 'Scaler';<br>var result = a.substring(2,4);<br>document.write(result);</div>",
            el2: ["al","ale","cal","caler"],
            el3: "",
            answer: 1
        }
    }
};

//example card to use with CSS to test styling
var quizStartCard = {
    type: "quiz-start",
    el1: "<h1>Coding Quiz</h1>",
    el2: "<p>You have 75 seconds to complete the quiz. Keep in mind that incorrect answers will penalize you by removing 10 seconds from the timer.</p>",
    el3: '<button class="button" id="quiz-start-btn">Start Quiz</button>'
}


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
    
    if (cardObject.type === "quiz-start"){
        cardEl.setAttribute("id","quiz-start");
        el1.innerHTML = cardObject.el1;
        el2.innerHTML = cardObject.el2;
        el3.innerHTML = cardObject.el3;
    }

    currentCardHolder.appendChild(cardEl);
};

//function to format a quiz question card
var createQuestionCard = function(cardObject) {
    var cardEl = createCardEl();

    //create question inside of el1
    el1.innerHTML = cardObject.el1;
    var unorderedListEl = document.createElement("ul");
    el2.appendChild(unorderedListEl);
    
    //create unordered list of answer buttons
    for (var i = 0; i < cardObject.el2.length; i++) {
        var answerButton = document.createElement("button");
        var listEl = document.createElement("li");
        answerButton.textContent = cardObject.el2[i];
        answerButton.setAttribute("class","button");
        answerButton.setAttribute("id","answer-"+i);
        listEl.appendChild(answerButton);
        unorderedListEl.appendChild(listEl);
    }
    currentCardHolder.appendChild(cardEl);
};

// createCard(quizStartCard);
createQuestionCard(cardObjects.quizCards.question8);

//function to add the "correct" attribute to the correct answer button

//function to remove the current card from the card holder element

//function to start timer

//function to stop quiz if timer reaches zero

//function to save scores to localStorage

//function to retrieve scores from localStorage

//function to start quiz and handle

//click event listener

//form submit event listener for high score form

