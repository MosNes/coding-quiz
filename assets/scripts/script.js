//creates variable to hold user's current score
var score = 0;

//selects the existing current-card container in the HTML
var currentCardHolder = document.getElementById("current-card");

//object that contains all the types of cards that can be displayed
var cardObjects = {
    quizStartCard: {
        id:"quiz-start-card",
        el1: "",
        el2: "",
        el3: ""
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
        question1: {
            id:"question1",
            el1: "",
            el2: "",
            el3: ""
        },
        question2: {
            id:"question2",
            el1: "",
            el2: "",
            el3: ""
        },
        question3: {
            id:"question3",
            el1: "",
            el2: "",
            el3: ""
        },
        question4: {
            id:"question4",
            el1: "",
            el2: "",
            el3: ""
        },
        question5: {
            id:"question5",
            el1: "",
            el2: "",
            el3: ""
        },
        question6: {
            id:"question6",
            el1: "",
            el2: "",
            el3: ""
        },
        question7: {
            id:"question7",
            el1: "",
            el2: "",
            el3: ""
        },
        question8: {
            id:"question8",
            el1: "",
            el2: "",
            el3: ""
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

//function to create a non-question card element
var createCard = function(cardObject) {
    //create the div to  hold the card's elements
    card = document.createElement("div");
    card.setAttribute("class","card");
    //create the 3 elements of each card
    el1 = document.createElement("div");
    el1.setAttribute("class","el1");
    el2 = document.createElement("div");
    el2.setAttribute("class","el2");
    el3 = document.createElement("div");
    el3.setAttribute("class","el3");
    card.appendChild(el1);
    card.appendChild(el2);
    card.appendChild(el3);
    console.log(card);

    if (cardObject.type === "quiz-start"){
        card.setAttribute("id","quiz-start");
        el1.innerHTML = cardObject.el1;
        el2.innerHTML = cardObject.el2;
        el3.innerHTML = cardObject.el3;
    }

    currentCardHolder.appendChild(card);
}

createCard(quizStartCard);

//function to create a quiz question element

//function to add the "correct" attribute to the correct answer button

//function to remove the current card from the card holder element

//function to start timer

//function to stop quiz if timer reaches zero

//function to save scores to localStorage

//function to retrieve scores from localStorage

//function to start quiz and handle

//click event listener

//form submit event listener for high score form

