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
console.log(flight)
console.log(passenger)

// Another example of using variables as parameters. When our parameters are objects, they will be affected.

let newPassport = function(person){
  person.passport = Math.trunc(Math.random()*1000000);
}

newPassport(passenger);
checkIn(flight, passenger);

// Higher order functions

function firstLetter(randomWord){
  return randomWord.replace(randomWord[0], randomWord[0].toUpperCase());
}

function capitalizing(anotherWord, firstLetter){
  return firstLetter(anotherWord);
}

capitalizing("miguel es un menso", firstLetter);