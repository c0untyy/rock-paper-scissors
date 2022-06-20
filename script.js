const SELECTION = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

const winners = [];

function game() {
  playRound();
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
function playerPlay() {}

// //Computer selection
function computerPlay() {
  const compPick = Math.floor(Math.random() * SELECTION.length);
  return SELECTION[compPick];
}

//Check winner
function checkWinner(selection, pcSelection) {
  return selection.beats === pcSelection.name
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
  console.log("----------------------");
}

const selectionButtons = document.querySelectorAll("[data-selection]");
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTION.find(selection => selection.name === selectionName)
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerChoice = computerPlay();
  const youWin = checkWinner(selection, computerChoice);
  const pcWin = checkWinner(computerChoice, selection);
  console.log(computerChoice);
  console.log(selection);
}


