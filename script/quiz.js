const questionElement = document.getElementById("question");
const nextBtn = document.getElementById("nextQuestion");
const options = document.getElementsByTagName("input");
const optionsLabel = document.getElementsByTagName("label");

var score = 0;
var index = parseInt(Math.random() * data.length);

nextBtn.addEventListener("click", CheckAnswer);

function CheckAnswer() {
  console.log("Next Clicked!!!");
  console.log(Array.from(options));
  let userChoice = Array.from(options).filter((option) => {
    console.log(option);
    return option.checked;
  });
  console.log(userChoice[0].nextElementSibling.textContent);
  let question = data.find((e) => e.question === questionElement.innerText);
  let isAnswerTrue = question.correctAns === userChoice.value && ++score;
  showQuestion();
}
function showQuestion() {
  let questionObj = data[index];
  questionElement.innerHTML = questionObj.question;
  let labels = Array.from(optionsLabel);
  console.log(labels);
  for (var key in questionObj) {
    optionsLabel[key].innerText = question.answers[key];
  }
  console.log(index);
}
