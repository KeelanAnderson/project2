const nextButton = document.getElementById('next-btn');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionElement = document.getElementById('questions')
const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', runGame)

function runGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    displayNextQuestion()
};


function displayNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }
}

function selectAnswer(e) {
     

}

let questions = [{
        question: "How old is the universe?",
        answers: [{
                text: "13.8 Billion Years",
                correct: true
            },
            {
                text: "2022 Years",
                correct: false
            },
            {
                text: "900 Trillion Years",
                correct: false
            },
            {
                text: "60 Million Years",
                correct: false
            },
        ]
    },
    {
        question: "How old am i?",
        answers: [{
                text: "7 Years",
                correct: true
            },
            {
                text: "2022 Years",
                correct: false
            },
            {
                text: "21 Years",
                correct: false
            },
            {
                text: "3",
                correct: false
            },
        ]
    }
]