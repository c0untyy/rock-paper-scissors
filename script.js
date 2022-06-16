const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent="Play again";
  logWins();
}

function playRound(round) {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRounds(playerSelection, computerSelection, winner, round);
}

//Player selection
function playerPlay() {
  let playerchoice = prompt(
    "Please enter your choice: (Rock / Paper / Scissors)"
  );
  while (playerchoice == null) {
    playerchoice = prompt(
      "Please enter your choice: (Rock / Paper / Scissors)"
    );
  }
  playerchoice = playerchoice.toLowerCase();
  let spellcheck = validateInput(playerchoice);
  while (spellcheck == false) {
    playerchoice = prompt(
      "Please enter your choice: (Rock / Paper / Scissors) \n Spelling needs to be exact!"
    );
    while (playerchoice == null) {
      playerchoice = prompt(
        "Please enter your choice: (Rock / Paper / Scissors)"
      );
    }
    playerchoice = playerchoice.toLowerCase();
    spellcheck = validateInput(playerchoice);
  }
  return playerchoice;
}

//Computer selection
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}
//console.log(computerPlay());

//checks for correct spelling
function validateInput(input) {
  return choices.includes(input);
}

//Check winner
function checkWinner(choicePlayer, choiceComputer) {
  if (choicePlayer === choiceComputer) {
    return "Draw";
  } else if (
    (choicePlayer === "rock" && choiceComputer === "scissors") ||
    (choicePlayer === "paper" && choiceComputer === "rock") ||
    (choicePlayer === "scissors" && choiceComputer === "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

//Logging winners
function logWins() {
  let playerWins = winners.filter((item) => item == "Player wins!").length;
  let computerWins = winners.filter((item) => item == "Computer wins!").length;
  let draw = winners.filter((item) => item == "Draw").length;
  console.log("Results: ");
  console.log("Player wins:", playerWins);
  console.log("Computer wins: ", computerWins);
  console.log("Draws: ", draw);
}

//Logging rounds
function logRounds(playerSelection, computerSelection, winner, round) {
  console.log("Round: ", round);
  console.log("Player chose: ", playerSelection);
  console.log("Computer chose: ", computerSelection);
  console.log(winner);
  console.log("----------------------")
}

