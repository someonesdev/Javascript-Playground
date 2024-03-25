let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let secretNumber = document.querySelector(".number").textContent;
let message = document.querySelector(".message");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let number = document.querySelector(".number");
let againBtn = document.querySelector(".again");
let highScore = document.querySelector(".highscore");

let gameScore = 20;
let gameHighScore = 0;

againBtn.addEventListener("click", again);
checkBtn.addEventListener("click", check);
guess.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    check();
  }
});

function winning() {
  message.textContent = "YOU WON!";
  checkBtn.disabled = true;
  guess.disabled = true;
  document.body.style.backgroundColor = "#070";
  number.textContent = randomNumber;
  gameScore > gameHighScore ? (gameHighScore = gameScore) : gameHighScore;
  highScore.textContent = gameHighScore;
}

function losing() {
  message.textContent = "YOU LOST!";
  checkBtn.disabled = true;
  guess.disabled = true;
  document.body.style.backgroundColor = "#900";
  number.textContent = randomNumber;
  gameScore > gameHighScore ? (gameHighScore = gameScore) : gameHighScore;
  highScore.textContent = gameHighScore;
  gameScore--;
  score.textContent = gameScore;
  message.textContent = "YOU LOST";
}

function check() {
  let guess = document.querySelector(".guess").value;
  console.log(guess);
  if (!guess || guess > 20) {
    message.textContent = "That is not a valid number.";
  } else if (guess == randomNumber) {
    winning();
  } else if (gameScore <= 1) {
    losing();
  } else {
    gameScore--;
    score.textContent = gameScore;
    guess > randomNumber
      ? (message.textContent = "Go lower!")
      : (message.textContent = "Go higher!");
  }
}

function again() {
  checkBtn.disabled = false;
  guess.disabled = false;
  gameScore = 20;
  score.textContent = 20;
  message.textContent = "Start guessing...";
  number.textContent = "?";
  document.body.style.backgroundColor = "#333";
  guess.value = "";
  randomNumber = Math.floor(Math.random() * 20) + 1;
}
