"use strict";

// Setting default parameters

let bookings = [];

const createBooking = function (
  flightNum = 0,
  numPassengers = 0,
  price = "$000"
) {
  const bookingInfo = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(bookingInfo);
  return bookings;
};

createBooking(243, undefined, 656);

const flight = "LH234";
const passenger = {
  name: "Jorge Zúñiga",
  passport: 128372637,
};

function checkIn(flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 128372637) {
    return "Checked in";
  } else {
    return "Wrong passport!";
  }
}

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

// Another example of using variables as parameters. When our parameters are objects, they will be affected.

let newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(passenger);
checkIn(flight, passenger);

// Call methods.

let lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    this.bookings.push({ flight: flightNum, name });
    return `${name} booked a seat on ${this.airline} flight ${flightNum}`;
  },
};

let book = lufthansa.book;
lufthansa.book(2172, "Jorge");
lufthansa.bookings;

let eurowings = {
  airline: "Eurowings",
  iatacode: "EW",
  bookings: [],
};

book.call(eurowings, 9838, "Jorge Zuniga");
eurowings.bookings;

book.call(lufthansa, 9838, "Mary Cooper");

let swiss = {
  airline: "Swiss Airlines",
  iatacode: "SA",
  bookings: [],
};

book.call(swiss, 1763, "Mary Cooper");
swiss.bookings;

// Apply method (same as call method but it takes an array instead of individual parameters)

let flightInfo = [1763, "John Stamos"];
book.apply(swiss, flightInfo);
swiss.bookings;

// Bind method!

let bookEU = book.bind(eurowings);
let bookSA = book.bind(swiss);
let bookLU = book.bind(lufthansa, 9999, "Anonymous");

bookLU(8723, "Peter Petigrew");

// Partial application

const addTax = (rate, value) => value + value * rate;
addTax(0.1, 200);

let addVat = addTax.bind(null, 0.23);
addVat(100);

// Coding challenge #1

/*
Let's build a simple poll app! 
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below. 
Your tasks: 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things: 
1.1. 
Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this: 
What is your favourite programming language? 
0: JavaScript 
1: Python 
2: Rust 
3: C++ 
(Write option number) 
1.2
Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?) 
2. Call this method whenever the user clicks the "Answer poll" button. 
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".  
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call. 
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation? 
20 
The Complete JavaScript Course 
Test data for bonus:  
§ Data 1: [5, 2, 3] 
§ Data 2: [1, 5, 3, 9, 6, 1] 
Hints: Use many of the tools you learned about in this and the last section 
�
� 
GOOD LUCK 
*/

let userChoice = 2;
typeof userChoice;

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    if (typeof userChoice === "number" && userChoice <= 4)
      this.answers[userChoice]++;
    poll.displayResults();
  },
  displayResults(type) {
    if (typeof type === "object") {
      return this.answers;
    } else if (typeof type === "string") {
      return `Pool results are ${this.answers}.`;
    }
  },
};


poll.registerNewAnswer();
poll.answers;

// We can manually set the this keyword to a just created object.

poll.displayResults.call({answers: [5,2,3]}, 'string');
