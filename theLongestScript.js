// Random Udemy and Codewars exercises

// Destructuring

let restaurant = {
  name: "Classico italiano",
  location: "Via Angelo Tavanti 23",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
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

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (let day of days) {
  if (restaurant.openingHours[day] === undefined) {
    console.log(`On ${day}, we are closed`);
  } else {
    console.log(`On ${day}, we open at ${restaurant.openingHours[day].open}`);
  }
}

let yourOrder = {
  name: "Alberto Salas",
  address: "Avenida Rio Bravo 29, CDMX",
  starterMenu: 2,
  mainMenu: 2,
};

restaurant.orderDelivery(yourOrder);

let rest1 = {
  name: "Vivancco",
  numGuest: 20,
};

let rest2 = {
  name: "Plaza",
  owner: "Marcello",
};

// Logical operators

// If the property doesn't exist (falsy), create it.
rest2.numGuest;
rest2.numGuest ??= 20;

// If the property exists (truty), change it.
rest2.numGuest;
rest2.numGuest &&= 25;

{
  const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
      [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
      ],
      [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
      ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  let [players1, players2] = game.players;
  let [gk, ...fieldplayers] = players1;

  let allPlayers = [...players1, ...players2];
  let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

  let { team1, x: draw, team2 } = game.odds;

  function printGoals(...args) {
    console.log(`Players: ${args}. Goals: ${args.length}`);
  }

  printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
  printGoals(...game.scored);
}

{
  // Challenge #2

  /* Coding Challenge #2 
Let's continue with our football betting app! Keep using the 'game' variable from 
before. 
Your tasks: 
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 

2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 


4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
} 
Gnarby: 1, 
Hummels: 1, 
Lewandowski: 2 */

  const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
      [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
      ],
      [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
      ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  for (let [index, players] of Object.entries(game.scored)) {
    console.log(`Goal ${Number(index) + 1}: ${players}`);
  }

  let scorers = {};

{ // Three ways to create objects
  
   for (let i = 0; i < game.scored.length; i++) {
    scorers[game.scored[i]] ??= 0;
    scorers[game.scored[i]]++;
  }

  for (let i = 0; i < game.scored.length; i++) {
    scorers[game.scored[i]] = (scorers[game.scored[i]] ?? 0) + 1;
  }

  for (let i = 0; i < game.scored.length; i++) {
    scorers[game.scored[i]]
      ? scorers[game.scored[i]]++
      : (scorers[game.scored[i]] = 1);
  }}
}
