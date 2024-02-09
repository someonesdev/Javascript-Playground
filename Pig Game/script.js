"use strict";

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
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
let gameOver = false;

btnRoll.addEventListener("click", diceRoll);
btnHold.addEventListener("click", hold);

function diceRoll() {
  roll = Math.floor(Math.random() * 6) + 1;
  diceItself.src = `dice-${roll}.png`;
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
  if (totalScore1 >= 10 || totalScore2 >= 10) {
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    switchActive();
  }
}