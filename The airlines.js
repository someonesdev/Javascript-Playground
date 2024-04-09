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