const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");

let curruntQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerId = null;

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
  if(curruntQuestionIndex<quiz.length){
    startTimer();
  }
};

const checkAnswer = () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (selectedChoice.textContent === quiz[curruntQuestionIndex].answer) {
    alert.style.backgroundColor = "#008000";
    displayAlert(`Correct Answer!`);
    score++;
  } else {
    alert.style.backgroundColor = "#c43138";
    displayAlert(
      `Wrong Answer!  ${quiz[curruntQuestionIndex].answer} is Correct Answer`
    );
  }
  timeLeft = 15;
  curruntQuestionIndex++;
  if (curruntQuestionIndex < quiz.length) {
    showQuestions();
  } else {
    showScore();
    stopTimer();
  }
};

const showScore = () => {
  questionBox.textContent = "";
  choicesBox.textContent = "";
  scoreCard.textContent = `You scored ${score} out of ${quiz.length}!`;
  alert.style.backgroundColor = "#1c4ac7";
  displayAlert("You Have Completed This Quiz!");
  nextBtn.textContent = "Play Again";
  quizOver = true;
  timer.style.display = "none";
};

const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

const startTimer = () => {
  clearInterval(timerId);
  timer.textContent = timeLeft;

  const countDown = () => {
    timer.textContent = timeLeft;
    timeLeft--;
    if(timeLeft == 0){
      const confirmUser = confirm("Time Up !! Do You want to play again");
      if(confirmUser){
        timeLeft = 15;
        startQuiz();
      }else{
        startBtn.style.display = "block";
        container.style.display = "none";
        return;
      }
    }
  };
  timerId = setInterval(countDown,1000);
};

const stopTimer = ()=>{
  clearInterval(timerId);
}


const shuffleQuestions = ()=>{
  for(let i  = quiz.length-1;i>0;i--){
    const j = Math.floor(Math.random() * (i+1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  curruntQuestionIndex = 0;
  showQuestions();
}

const startQuiz = () =>{
  timeLeft = 15;
  timer.style.display = "flex";
  shuffleQuestions();
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
  startQuiz();
});

nextBtn.addEventListener("click", () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (!selectedChoice && nextBtn.textContent == "Next") {
    displayAlert("Select Your Answer");
    return;
  }
  if (quizOver) {
    alert.style.display = "none";
    nextBtn.textContent = "Next";
    scoreCard.textContent = "";
    curruntQuestionIndex = 0;
    quizOver = false;
    startQuiz();
    score = 0;
  } else {
    checkAnswer();
  }
});
