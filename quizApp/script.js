const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");

let curruntQuestionIndex = 0;
let score = 0;

const quiz = [
  {
    question: "Q. Which of the following is not a CSS Box Model property?",
    options: ["margin", "padding", "border-radius", "border-collapse"],
    answer: "border-collapse",
  },
  {
    question: "Q.2 Which of the following is not a CSS Box Model property?",
    options: ["margin", "padding", "border-radius", "border-collapse"],
    answer: "border-collapse",
  },
  {
    question: "Q.3 Which of the following is not a CSS Box Model property?",
    options: ["margin", "padding", "border-radius", "border-collapse"],
    answer: "border-collapse",
  },
  {
    question: "Q.4 Which of the following is not a CSS Box Model property?",
    options: ["margin", "padding", "border-radius", "border-collapse"],
    answer: "border-collapse",
  },
];

let showQuestions = () => {
  const questionDetails = quiz[curruntQuestionIndex];
  questionBox.textContent = questionDetails.question;

  choicesBox.textContent = "";

  for (let i = 0; i < questionDetails.options.length; i++) {
    const currentChoice = questionDetails.options[i];
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent = currentChoice;
    choiceDiv.classList.add("choice");
    choicesBox.appendChild(choiceDiv);

    choiceDiv.addEventListener("click", () => {
      if (choiceDiv.classList.contains("selected")) {
        choiceDiv.classList.remove("selected");
      } else {
        choiceDiv.classList.add("selected");
      }
    });
  }
};

const checkAnswer = () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (selectedChoice.textContent === quiz[curruntQuestionIndex].answer) {
    alert("correct answer");
    score++;
  } else {
    alert("wrong answer");
  }

  curruntQuestionIndex++;
  if (curruntQuestionIndex < quiz.length) {
    showQuestions();
  } else {
    showScore();
  }
};

const showScore = () => {
  questionBox.textContent = "";
  choicesBox.textContent = "";
  scoreCard.textContent = `You scored ${score} out of ${quiz.length}!`;
  nextBtn.textContent = "Play Again";
  nextBtn.addEventListener('click',()=>{
    curruntQuestionIndex = 0;
    nextBtn.textContent = "Next";
    scoreCard.textContent = "";
    showQuestions();
  });
};

showQuestions();
nextBtn.addEventListener("click", () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (!selectedChoice && nextBtn.textContent == "Next") {
    alert("Select Your Answer");
    return;
  } else {
    checkAnswer();
  }
});
