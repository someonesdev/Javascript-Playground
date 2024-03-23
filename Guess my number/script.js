let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let secretNumber = document.querySelector(".number").textContent;
let message = document.querySelector(".message");
let guess = document.querySelector(".guess");
let checkButton = document.querySelector(".check");
let score = document.querySelector(".score");

let gameScore = 20;
let gameHighScore = 0;

checkButton.addEventListener("click", check);
guess.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    check();
  }
});

function check() {
  let guess = document.querySelector(".guess").value;
  console.log(guess);
  if (!guess) {
    message.textContent = "That is not a valid number.";
  } else if (guess == randomNumber) {
    message.textContent = "YOU WON!";
    checkButton.disabled = true;
    guess.disabled = true;
  } else if (guess > randomNumber) {
    gameScore--;
    score.textContent = gameScore;
    message.textContent = "Go lower!";
  } else {
    gameScore--;
    score.textContent = gameScore;
    message.textContent = "Go higher!";
  }
}
