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

/* Challenge  #3

Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time). 
Your tasks: 
1. Create an array 'events' of the different game events that happened (no 
duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: ⚽ GOAL.

*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

gameEvents.delete(64);

let events = [...new Set(gameEvents.values())];
console.log(
  `"An event happened, on average, every ${
    90 / gameEvents.size
  } minutes" (keep in mind that a game has 90 minutes.`
);

for (let [key, event] of gameEvents) {
  console.log(`[${key > 45 ? "SECOND" : "FIRST"} HALF] ${key} ${event}`);
  {
    // Challenge #2

    /* Coding Challenge #2 
  Let's continue with our football betting app! Keep using the 'game' variable from 
  before. 
  Your tasks: 
  1. Loop over the game.scored array and print each player name to the console, 
  along with the goal number (Example: "Goal 1: Lewandowski") */

    for (let [goal, player] of Object.entries(game.scored)) {
      `Goal ${Number(goal) + 1}: ${player}`;
    }

    /* 2. Use a loop to calculate the average odd and log it to the console (We already 
  studied how to calculate averages, you can go check if you don't remember) */
    let average = 0;
    for (let score of Object.values(game.odds)) {
      average += score;
    }
    average /= Object.entries(game.odds).length;

    /* 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
  Odd of victory Bayern Munich: 1.33 
  Odd of draw: 3.25 
  Odd of victory Borrussia Dortmund: 6.5 
  Get the team names directly from the game object, don't hardcode them 
  (except for "draw"). Hint: Note how the odds and the game objects have the 
  same property names */

    for (let [team, odds] of Object.entries(game.odds)) {
      if (game[team] !== undefined) {
        `Odd of victory ${game[team]}: ${odds}`;
      } else {
        `Odd of draw: ${odds}`;
      }
    }

    /*  4. Bonus: Create an object called 'scorers' which contains the names of the 
  players who scored as properties, and the number of goals as the value. In this 
  game, it will look like this: 
  { 
  } 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 */

    let scorers = {};

    for (let players of Object.values(game.scored)) {
      scorers[players] ? scorers[players]++ : (scorers[players] = 1);
    }

    scorers;
  }
}
