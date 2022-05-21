//selects the existing current-card container in the HTML
var currentCardHolder = document.getElementById("#current-card");

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

var quizStartCard = {
    type: "quiz-start",
    el1: "",
    el2: "",
    el3: ""
}
