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
  document.body.style.backgroundColor = "#070";
  gameHighScore = Math.max(gameScore, gameHighScore);
  gameEnding();
}

function losing() {
  message.textContent = "YOU LOST!";
  document.body.style.backgroundColor = "#900";
  gameEnding();
  gameScore--;
  score.textContent = gameScore;
}

function gameEnding() {
  checkBtn.disabled = true;
  guess.disabled = true;
  number.textContent = randomNumber;
  highScore.textContent = gameHighScore;
}

function check() {
  let myGuess = guess.value;
  if (!myGuess || myGuess > 20) {
    message.textContent = "That is not a valid number.";
  } else if (myGuess == randomNumber) {
    winning();
  } else if (gameScore <= 1) {
    losing();
  } else {
    gameScore--;
    score.textContent = gameScore;
    myGuess > randomNumber
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
