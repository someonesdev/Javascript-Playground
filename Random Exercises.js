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

// Higher order functions

function firstLetter(randomWord) {
  return randomWord.replace(randomWord[0], randomWord[0].toUpperCase());
}

function capitalizing(anotherWord, firstLetter) {
  return firstLetter(anotherWord);
}

capitalizing("miguel es un menso", firstLetter);

// For each method

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let number of numbers) {
  console.log(number);
}

// Slice & Splice (the splice method mutates the array)

console.log(numbers.slice(-1));
numbers;
console.log(numbers.splice(-1));
numbers.push(5);
numbers;

// FOR OF

for (let number of numbers) {
  console.log(number);
}

{
  let statement = [300, -200, 500, -200, 700];




  



  for (let transaction of statement) {
    if (transaction > 0) {
      console.log(`You deposited ${transaction}`);
    } else {
      console.log(`You withdrew ${transaction}`);
    }
  }

  statement.forEach((transaction) => {
    console.log(
      `You ${transaction > 0 ? "deposited" : "withdrew"} ${Math.abs(
        transaction
      )}`
    );
  });
}

// FOR IN

let person = {
  name: "Jorge",
  age: 35,
  lastName: "Zuniga",
};

for (let [key, value] of Object.entries(person)) {
  console.log(key);
  console.log(value);
}

// FOR EACH

numbers = [1, -2, 3, -4, 5];

numbers.forEach((item) => {
  console.log(item * -1);
});

numbers.forEach((number) => console.log(number));
