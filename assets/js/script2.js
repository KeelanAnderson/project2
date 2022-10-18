const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const answerButtons = document.getElementById('answer-buttons');
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('questions')

startButton.addEventListener('click', runGame)


function runGame() {
    startButton.classList.add('hide')
    displayNextQuestion()
};

function displayNextQuestion() {
    questionContainer.classList.remove('hide')
  
}





const questions = [

    {
        question: "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
        correct_answer: "Nitrogen",
        incorrect_answers: ["Helium", "Carbon", "Hydrogen"]
    },
    {

        question: "In aeronautics, flaps and slats are used to control what on an aircraft?",
        correct_answer: "Lift",
        incorrect_answers: ["Thrust", "Drag", "Weight "]
    }
]