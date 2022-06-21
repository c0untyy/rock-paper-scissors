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

const winner = document.getElementById("winner");
const winsText = document.getElementById("wins");
const winEmoji = document.getElementById("winEmoji");
const loseEmoji = document.getElementById("loseEmoji");
let roundwinner = "";

function computerPlay() {
  const compPick = Math.floor(Math.random() * SELECTION.length);
  return SELECTION[compPick];
}

function checkWinner(selection, pcSelection) {
  if (selection.beats === pcSelection.name) {
    roundwinner = "player";
    return roundwinner;
  } else if (pcSelection.beats === selection.name) {
    roundwinner = "computer";
    return roundwinner;
  } else if (selection.name === pcSelection.name) {
    roundwinner = "tie";
    return roundwinner;
  }
}

const selectionButtons = document.querySelectorAll("[data-selection]");
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTION.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerChoice = computerPlay();
  const youWin = checkWinner(selection, computerChoice);
  const pcWin = checkWinner(computerChoice, selection);
  displayResults(youWin, pcWin);
  displayEmojis(selection, computerChoice);
}

function displayResults(roundwinner) {
  if (roundwinner === "player") {
    winner.textContent = "PLAYER";
    winsText.textContent = "WINS!";
    loseEmoji.classList.remove("winnerEmoji");
    winEmoji.classList.add("winnerEmoji");
  } else if (roundwinner === "computer") {
    winner.textContent = "COMPUTER";
    winsText.textContent = "WINS!";
    winEmoji.classList.remove("winnerEmoji");
    loseEmoji.classList.add("winnerEmoji");
  } else if (roundwinner === "tie") {
    winner.textContent = "TIE";
    winsText.textContent = "";
    winEmoji.classList.remove("winnerEmoji");
    loseEmoji.classList.remove("winnerEmoji");
  }
}

function displayEmojis(selection, computerChoice) {
  switch (selection.name) {
    case "rock":
      winEmoji.textContent = "✊";
      break;
    case "paper":
      winEmoji.textContent = "✋";
      break;
    case "scissors":
      winEmoji.textContent = "✌️";
      break;
  }
  switch (computerChoice.name) {
    case "rock":
      loseEmoji.textContent = "✊";
      break;
    case "paper":
      loseEmoji.textContent = "✋";
      break;
    case "scissors":
      loseEmoji.textContent = "✌️";
      break;
  }
}
