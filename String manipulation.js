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
