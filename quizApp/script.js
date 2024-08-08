const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");

let curruntQuestionIndex = 0;

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

let showQuestions = () =>{
    const questionDetails = quiz[curruntQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    
    for(let i = 0; i<questionDetails.options.length; i++){
        const currentChoice = questionDetails.options[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click',()=>{
          if(choiceDiv.classList.contains('selected')){
            choiceDiv.classList.remove('selected');
          }else{
            choiceDiv.classList.add('selected');
          }
        });
    }

}

showQuestions();
nextBtn.addEventListener('click', ()=>{
    if(curruntQuestionIndex<quiz.length){
        curruntQuestionIndex++;
        showQuestions();
    }
});