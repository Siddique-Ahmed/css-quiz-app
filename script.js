let quiz = [
  {
    question: "What does CSS Stand for?",
    ansA: "Creative Style Sheets",
    ansB: "Colorful Style Sheets",
    ansC: "Cascading Style Sheets",
    ansD: "Computer Style Sheets",
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    ansA: "<stylesheet>mystyle.css</stylesheet>",
    ansB: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
    ansC: "<style src='mystyle.css'>",
    ansD: "<style>mystyle.css</style>",
    answer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    ansA: "At the end of the document",
    ansB: "in the <body> section",
    ansC: "in the <head> section",
    ansD: "both <head> and <body>",
    answer: "in the <body> section",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    ansA: "<style>",
    ansB: "<css>",
    ansC: "<script>",
    ansD: "<file>",
    answer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    ansA: "font",
    ansB: "style",
    ansC: "styles",
    ansD: "class",
    answer: "style",
  },
  {
    question: "Which is the correct CSS syntax?",
    ansA: "{body;color:black}",
    ansB: "{body:color=black;}",
    ansC: "body{color:black;}",
    ansD: "body:color=black;",
    answer: "body{color:black;}",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    ansA: "// this is a comment",
    ansB: "'this is a comment",
    ansC: "/*this is a comment*/",
    ansD: "// this is a comment //",
    answer: "/*this is a comment*/",
  },
  {
    question: "Which property is used to change the background color?",
    ansA: "background-color",
    ansB: "bgcolor",
    ansC: "color",
    ansD: "colorBackground",
    answer: "background-color",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    ansA: "all.h1 {background-color: #ffffff}",
    ansB: "h1.all {background-color: #ffffff}",
    ansC: "h1 {background-color: #ffffff}",
    ansD: "all>h1 {background-color: #ffffff}",
    answer: "h1 {background-color: #ffffff}",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    ansA: "text-color",
    ansB: "fontcolor",
    ansC: "fgcolor",
    ansD: "color",
    answer: "color",
  },
];

let currentQuestion = 0;
let score = 0;

let nextBtn = document.querySelector("#submit");
let question = document.querySelector("#question");
let optionA = document.querySelector("#textOptionA");
let optionB = document.querySelector("#textOptionB");
let optionC = document.querySelector("#textOptionC");
let optionD = document.querySelector("#textOptionD");

// ############## for result ############# \\
let result = document.querySelector(".result");
let greeting = document.querySelector("#greet");
let totalMarks = document.querySelector("#totalMarks span");
let obtainedMarks = document.querySelector("#obtainedMarks span");

// ############### alert Box #################### \\
let alert = document.querySelector(".alert");

// ################## fill the question with quiz #################### \\
function loadQuestion(){
question.textContent = quiz[currentQuestion].question;
optionA.textContent = quiz[currentQuestion].ansA;
optionB.textContent = quiz[currentQuestion].ansB;
optionC.textContent = quiz[currentQuestion].ansC;
optionD.textContent = quiz[currentQuestion].ansD;
}
loadQuestion();
nextBtn.addEventListener("click", () => {
  let selectedAns = document.querySelector("input[type='radio']:checked");

  if (selectedAns === null) {
    alert.style.top = "10%";
  } else {
    alert.style.top = "-50%";

    let label = selectedAns.nextElementSibling.textContent;

    if (label === quiz[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      loadQuestion();
      selectedAns.checked = false;
    } else {
      if (score >= 7) {
        greeting.textContent = "Congratulation you are passed!";
        greeting.style.color = "#0f8b62";
      } else {
        greeting.textContent = "Sorry you are fail!";
        greeting.style.color = "orangered";
      }
      totalMarks.textContent = `${quiz.length}`;
      obtainedMarks.textContent = `${score}`;
      result.style.top = "10%";
    }
  }
});
