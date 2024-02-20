"use strict";

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

  for (let [i, players] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${players}`);
  }

  let average = 0;
  for (let entry of Object.values(game.odds)) average += entry;

  average /= Object.values(game.odds).length;

  for (let [key, value] of Object.entries(game.odds)) {
    key == "x"
      ? console.log(`Odds of draw: ${value}`)
      : console.log(`Odds of victory for  ${game[key]}: ${value}`);
  }

  console.log(`Odd of draw: ${game.odds.x}`);
  console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

  let scorers = {};

  {
    // Three ways to create objects

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
    }
  }
}