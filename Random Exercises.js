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

numbers.forEach((item, index, array) => {
  console.log(item * -1);
});

numbers.forEach((number) => console.log(number));

/* Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK  */

function checkDogs(dogsJulia, dogsKate) {}

let oldDogsJulia = [3, 5, 2, 12, 7];

let dogsJulia = oldDogsJulia.slice(1, -1);
let dogsKate = [4, 1, 15, 8, 3];

let allDogs = [...dogsJulia, ...dogsKate];
allDogs;

allDogs.forEach(function (dog, i) {
  let age = dog > 4 ? "is an adult" : "is still a puppy";
  console.log(`Dog number ${i + 1} ${age} and is ${dog} years old.`);
});
