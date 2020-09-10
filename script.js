
//Variables
const timeLeftDisplay = document.querySelector("#time-left");
const startBtn = document.querySelector("#start-button");
let timeLeft = 30;
const questionTitle = document.querySelector("#title");
const answers = document.querySelector("#answers");
let currentQuestion = 0;
let questionSpot = document.querySelector("#questions");
let answer1 = document.querySelector('#a');
let answer2 = document.querySelector('#b');
let answer3 = document.querySelector('#c');
let answer4 = document.querySelector('#d');

let questions = [
    {

        question: "What does HTML stand for?",
        correctAnswer: "Hypertext Markup Language",
        allAnswers: [
            "Haven't tried machine learning",
            "Horrible Themes, Mandatory Logic",
            "How To Meet Ladies",
            "Hypertext Markup Language"
        ]
    },

    {
        question: "What does CSS stand for?",
        correctAnswer: "Cascading Style Sheets",
        allAnswers: [
            "Centering Shouldn't Suck",
            "Cascading Style Sheets",
            "Complex Sites Simplified",
            "Customer Service Support"
        ]
    },

    {
        question: "What is JavaScript?",
        correctAnswer: "A programming language commonly used in web development",
        allAnswers: [
            "A programming language commonly used in web development",
            "Something most people hate",
            "A movie script with coffee spilled on it",
            "Undefined"
        ]
    },

    {
        question: "What does a programmer do?",
        correctAnswer: "A computer programer codes instructions for a computer to follow.",
        allAnswers: [
            "Hack NASA with HTML",
            "A computer programer codes instructions for a computer to follow.",
            "Point, click, copy, and paste",
            "Begging computers to please do what we have in our minds"
        ]
    },
]

//Functions
function countDown() {
    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }

        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000)
}
function start() {

}

function fillOutDom() {
    questionSpot.textContent = questions[currentQuestion].questions;
    answer1.textContent = questions[currentQuestion].allAnswers[0];
    answer2.textContent = questions[currentQuestion].allAnswers[1];
    answer3.textContent = questions[currentQuestion].allAnswers[2];
    answer4.textContent = questions[currentQuestion].allAnswers[3];
}

//Event listerners
startBtn.addEventListener('click', countDown);

document.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        if (event.target.textContent === questions[currentQuestion].correctAnswer) {
        } else {
        }
        currentQuestion++;
        fillOutDom();
    }
})
let current_Question = questions[0]
//Entrypoint
// console.log(current_Question.question);
// console.log(current_Question.correctAnswer);
// console.log(current_Question.allAnswers);

// questionTitle.textContent = current_Question.question
// let x = document.createElement("BUTTON");
// x.innerHTML = current_Question.allAnswers[0]
// answers.appendChild(x)

//function to save initials and score to local storage
function initialsSave() {
    const initials = document.querySelector("#initials");
    let initializer = initials.value.trim();
    if (initializer !== "") {
        let highScores = JSON.parse(window.localStorage.getItem("high score") || "[]");

        let newScore = {
            score: secondsLeft,
            initials: initializer,
        }

        highScores.push(newScore);
        window.localStorage.setItem("high-scores", JSON.stringify(highScores));

        window.location.href = "index.html";
    }
}
// submit.onclick = initialsSave;