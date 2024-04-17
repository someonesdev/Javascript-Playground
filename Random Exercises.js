"use strict";

/* Create a function that takes a full name and capitalizes the first letter */

function fullName(fullname) {
  let name = fullname.toLowerCase().split(" ");
  let newName = [];
  for (let i = 0; i < name.length; i++) {
    // newName.push(name[i][0].toUpperCase() + name[i].slice(1));
    newName.push(name[i].replace(name[i][0], name[i][0].toUpperCase()));
  }
  return newName.join(" ");
}

fullName("jorge enrique zúñiga landeros");

/* Create a function that padds a credit card number */

function maskingCC(ccnumber) {
  return ccnumber.slice(-4).padStart(14, "*");
}

maskingCC("1382-2894-2938-9847");

// Repeat

let message = "Nothing to worry about. ";
let newMessage = message.repeat(5);

<<<<<<< HEAD:String manipulation.js

const rps = (p1, p2) => {
  if (p1 === "rock" && p2 === 'scissors'){
    return 'Player 1 won!';
  } else if (p1 === "paper" && p2 === 'rock'){
    return 'Player 1 won!';
  } else if (p1 === "scissors" && p2 === 'paper'){
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};
    
    rps('rock', 'paper');
=======
// Higher order functions

function firstLetter(randomWord){
    return randomWord.replace(randomWord[0], randomWord[0].toUpperCase());
  }
  
  function capitalizing(anotherWord, firstLetter){
    return firstLetter(anotherWord);
  }
  
  capitalizing("miguel es un menso", firstLetter);
>>>>>>> 069f425ea80df191c1f7f97e43ffdb4fd3ad5cb6:Random Exercises.js
