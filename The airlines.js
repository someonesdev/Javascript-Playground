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
let bookLU = book.bind(lufthansa, 9999, 'Anonymous');

bookLU(8723, 'Peter Petigrew');