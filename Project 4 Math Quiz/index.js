const questionEL = document.getElementById("question");
const questionFormEL = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
let storeAnswer;
let score = 0;
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log("RadnomNumber", randomNumber(1, 5));

const generateQuestion = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);
  const questionType = randomNumber(1, 4);
  let firstNumber;
  let secondNumber;
  if (randomNumber1 > randomNumber2 && questionType > 2) {
    firstNumber = randomNumber1;
    secondNumber = randomNumber2;
  } else {
    firstNumber = randomNumber2;
    secondNumber = randomNumber1;
  }
  let question;
  let answer;

  switch (questionType) {
    case 1: {
      question = `Q.What is ${firstNumber} multipy by ${secondNumber}`;
      answer = firstNumber * secondNumber;
      break;
    }
    case 2: {
      question = `Q.What is ${firstNumber} Add to ${secondNumber}`;
      answer = firstNumber + secondNumber;
      break;
    }
    case 3: {
      question = `Q.What is ${firstNumber} Divide by ${secondNumber}`;
      answer = firstNumber / secondNumber;
      break;
    }
    case 4: {
      question = `Q.What is ${firstNumber} Subtract from ${secondNumber}`;
      answer = firstNumber - secondNumber;
      break;
    }
  }
  return { question, answer };
};

const showQuestion = () => {
  const { question, answer } = generateQuestion();
  questionEL.innerText = question;
  storeAnswer = answer;
};
showQuestion();

const checkAnswer = (event) => {
  event.preventDefault();
  const formData = new FormData(questionFormEL);
  const userAnswer = +formData.get("answer");
  if (userAnswer === storeAnswer) {
    score += 1;
    Toastify({
      text: `Your are Correct and Your score is ${score}`,
      className: "info",
      gravity: "bottom",
      position: "center",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  } else {
    score -= 1;
    Toastify({
      text: `Your are Wrong and Your score is ${score}`,
      className: "info",
      gravity: "bottom",
      position: "center",
      style: {
        background: "linear-gradient(to right, #e33217, #ff001e)",
      },
    }).showToast();
  }
  scoreEl.innerText = score;
  event.target.reset();
  showQuestion();
};
