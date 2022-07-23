const data = [
  {
    question: "JavaScript is a ___ -side programming language.",
    answers: ["Client", "Server", "Both", "None"],
    correctAns: "Both",
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    answers: [
      "alertBox(“Hello DataFlair!”)",
      "alert(Hello DataFlair!);",
      "msgAlert(“Hello DataFlair!”); ",
      "alert(“Hello DataFlair!”);",
    ],
    correctAns: "alert(“Hello DataFlair!”);",
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    answers: [" min(x,y);", "Math.min(x,y)", "Math.min(xy)", "min(xy);"],
    correctAns: "Math.min(x,y)",
  },
  {
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    answers: ["catch", "label", "try", "default"],
    correctAns: "default",
  },
  {
    question:
      "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    answers: ["if(x 2)", "if(x = 2)", "if(x == 2)", " if(x != 2 )"],
    correctAns: "if(x == 2)",
  },
  {
    question: "What will the code return?\nBoolean(3 < 7)",
    answers: ["true", "false", "NaN", "SyntaxError"],
    correctAns: "true",
  },
  {
    question: "What will the code return?\nBoolean(8 < 7)",
    answers: ["true", "false", "NaN", "SyntaxError"],
    correctAns: "false",
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
    ],
    correctAns: "Cascading Style Sheets",
  },
  {
    question:
      "Which of the following selector matches the name of any element type?",
    answers: [
      "The Type Selector",
      "The Universal Selector",
      "The Descendant Selector",
      "The Class Selector",
    ],
    correctAns: "The Universal Selector",
  },
  {
    question: "Which of the following defines a measurement in inches?",
    answers: ["in", "mm", "pc", "pt"],
    correctAns: "in",
  },
  {
    question:
      "Which of the following property is used to control the position of an image in the background?",
    answers: [
      "background-color",
      "background-image",
      "background-position",
      "background-repeat",
    ],
    correctAns: "background-position",
  },
];

const questionElement = document.getElementById("question");
const questionIndicator = document.getElementById("question-indicator");
const nextBtn = document.getElementById("nextQuestion");
const options = document.getElementsByTagName("input");
const optionsLabel = document.getElementsByTagName("label");

const option1 = document.getElementById("a");
const option2 = document.getElementById("b");
const option3 = document.getElementById("c");
const option4 = document.getElementById("d");

const dataLength = data.length;

var score = 0;
var arr = [];
var qIndex = 0;
var rIndex = randomUnique(dataLength);

nextBtn.addEventListener("click", CheckAnswer);

option1.addEventListener("click", isChecked);
option2.addEventListener("click", isChecked);
option3.addEventListener("click", isChecked);
option4.addEventListener("click", isChecked);

showQuestion();

function isChecked() {
  
  if (option1.checked) {
    option1.parentElement.style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--PrimaryColor");
    option1.parentElement.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--white");
  } else {
    option1.parentElement.removeAttribute("style");
  }
  if (option2.checked) {
    option2.parentElement.style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--PrimaryColor");
    option2.parentElement.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--white");
  } else {
    option2.parentElement.removeAttribute("style");
  }
  if (option3.checked) {
    option3.parentElement.style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--PrimaryColor");
    option3.parentElement.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--white");
  } else {
    option3.parentElement.removeAttribute("style");
  }
  if (option4.checked) {
    option4.parentElement.style.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--PrimaryColor");
    option4.parentElement.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--white");
  } else {
    option4.parentElement.removeAttribute("style");
  }
}

function CheckAnswer() {
  let oIndex = randomUnique(4);
  let userChoice = Array.from(options).filter((option) => {
    return option.checked;
  })[0].nextElementSibling.textContent;
  let cAnswer = data[rIndex[qIndex]].correctAns;
  console.log("cAnswer => ", cAnswer);
  console.log("userChoice => ", userChoice);
  let isAnswerTrue = cAnswer === userChoice && ++score;
  console.log("isAnswerTrue => ", isAnswerTrue);
  console.log("score => ", score);
  showQuestion();
}

function showQuestion() {
  qIndex++;
  questionIndicator.textContent = `${qIndex}/10`;
  let questionObj = data[arr[qIndex]];
  let answers = questionObj.answers;
  questionElement.innerHTML = questionObj.question;
  let labels = Array.from(optionsLabel);
  labels.map((x, c) => {
    x.innerText = answers[c];
  });
  option1.parentElement.removeAttribute("style");
  option2.parentElement.removeAttribute("style");
  option3.parentElement.removeAttribute("style");
  option4.parentElement.removeAttribute("style");
}

function randomUnique(max) {
  while (arr.length < max) {
    var r = Math.floor(Math.random() * max - 1) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
