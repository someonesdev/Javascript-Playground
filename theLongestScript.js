// Random Udemy and Codewars exercises

// Destructuring

let restaurant = {
  name: "Classico italiano",
  location: "Via Angelo Tavanti 23",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thuesday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0,
      close: 24,
    },
  },

  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  orderDelivery: function ({ starterMenu, mainMenu, name, address }) {
    return `Order received! ${this.starterMenu[starterMenu]} and ${this.mainMenu[mainMenu]}, for ${name} at ${address}.`;
  },
};

let yourOrder = {
  name: "Alberto Salas",
  address: "Avenida Rio Bravo 29, CDMX",
  starterMenu: 2,
  mainMenu: 2,
};

restaurant.orderDelivery(yourOrder);


let rest1 = {
  name: "Vivancco",
  numGuest: 20
}

let rest2 = {
  name: "Plaza",
  owner: "Marcello"
}

// Logical operators

// If the property doesn't exist (falsy), create it.
rest2.numGuest;
rest2.numGuest ??= 20;

// If the property exists (truty), change it.
rest2.numGuest;
rest2.numGuest &&= 25;