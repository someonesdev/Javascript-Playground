"use strict";

const btnRoll = document.querySelector(".btn--roll");
const score1 = document.getElementById("score-1");
const diceItself = document.querySelector(".dice");
const current1 = document.querySelector("#current--1");
const current2 = document.querySelector("#current--2");
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");

let currentScore = 0;
let activePlayer = 1;
let roll = 0;

btnRoll.addEventListener("click", diceRoll);

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
