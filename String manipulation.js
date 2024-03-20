"use strict";

/* Create a function that takes a full name and capitalizes the first letter */

function fullName(fullname) {
  let name = fullname.toLowerCase().split(" ");
  let newName = [];
  for (let i = 0; i < name.length; i++){
    newName.push(name[i][0].toUpperCase() + name[i].slice(1));
  }
  return newName.join(" ");
}

fullName("jorge enrique zúñiga landeros");