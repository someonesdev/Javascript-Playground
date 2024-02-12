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
