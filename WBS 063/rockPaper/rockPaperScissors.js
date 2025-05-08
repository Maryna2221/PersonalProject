// rockPaperScissors.js

// Its a player move
const playerMove = process.argv[2]?.toLowerCase();

// We check if text is correct
const validMoves = ["rock", "paper", "scissors"];
if (!validMoves.includes(playerMove)) {
  console.log("Text 'rock', 'paper','scissors'.");
  process.exit(1);
}

// Computers move
const computerMove = validMoves[Math.floor(Math.random() * 3)];

// Result of the game
let result = "";

if (playerMove === computerMove) {
  result = "It's a draw!";
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "paper" && computerMove === "rock") ||
  (playerMove === "scissors" && computerMove === "paper")
) {
  result = "You win!";
} else {
  result = "You lose!";
}

// We see a result
console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}`);
