"use strict";

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const score1 = document.getElementById("score--1");
const score2 = document.getElementById("score--2");
const diceItself = document.querySelector(".dice");
const current1 = document.querySelector("#current--1");
const current2 = document.querySelector("#current--2");
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");

let currentScore = 0;
let activePlayer = 1;
let roll = 0;
let totalScore1 = 0;
let totalScore2 = 0;

btnRoll.addEventListener("click", diceRoll);
btnHold.addEventListener("click", hold);
btnNew.addEventListener("click", newGame);

function diceRoll() {
  roll = Math.floor(Math.random() * 6) + 1;
  diceItself.src = `dice-${roll}.png`;
  diceItself.classList.add("dice-rolling");
  setTimeout(function () {
    diceItself.classList.remove("dice-rolling");
  }, 500);
  scores();
}

function scores() {
  currentScore += roll;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  if (roll == 1) {
    switchActive();
    currentScore = 0;
    current1.textContent = 0;
    current2.textContent = 0;
  }
}

function hold() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  if (activePlayer == 1) {
    totalScore1 += currentScore;
    score1.textContent = totalScore1;
  } else {
    totalScore2 += currentScore;
    score2.textContent = totalScore2;
  }
  currentScore = 0;
  isGameOver();
}

function switchActive() {
  if (activePlayer == 1) {
    activePlayer = 2;
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
  } else {
    activePlayer = 1;
    player2.classList.remove("player--active");
    player1.classList.add("player--active");
  }
}

function isGameOver() {
  if (totalScore1 >= 100 || totalScore2 >= 100) {
    btnRoll.disabled = true;
    btnHold.disabled = true;
    document.querySelector(`#name--${activePlayer}`).textContent = "You win!";
  } else {
    switchActive();
  }
}

function newGame() {
  document.querySelector(
    `#name--${activePlayer}`
  ).textContent = `Player ${activePlayer}`;
  if (player2.classList.contains("player--active")) {
    switchActive();
  }
  resetGame();
}

function resetGame() {
  currentScore = 0;
  activePlayer = 1;
  roll = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  btnRoll.disabled = false;
  btnHold.disabled = false;
  diceItself.src = "dice-1.png";
}
