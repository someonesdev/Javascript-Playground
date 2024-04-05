"use strict";

// Setting default parameters

let bookings = [];

const createBooking = function(flightNum = 0, numPassengers = 0, price = '$000'){
    const  bookingInfo = {
        flightNum,
        numPassengers, 
        price
    }
    bookings.push(bookingInfo);
    return bookings;
};

createBooking(243, undefined, 656);