const choices = ["rock", "paper", "scissors"];

const playerTotalArea = document.querySelector(".totals-player span");
let playerTotal = playerTotalArea.textContent;
const computerTotalArea = document.querySelector(".totals-computer span");
let computerTotal = computerTotalArea.textContent;
const buttons = document.querySelectorAll("button");
const outcomeArea = document.querySelector(".outcomeArea");

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
	switch (playerChoice) {
		case "rock":
			switch (computerChoice) {
				case "rock":
					return "Tie";
				case "paper":
					return "Lose";
				case "scissors":
					return "Win";
			}
			break;
		case "paper":
			switch (computerChoice) {
				case "rock":
					return "Win";
				case "paper":
					return "Tie";
				case "scissors":
					return "Lose";
			}
			break;
		case "scissors":
			switch (computerChoice) {
				case "rock":
					return "Lose";
				case "paper":
					return "Win";
				case "scissors":
					return "Tie";
			}
	}
}

function playRound(playerChoice) {
	let outcome = determineWinner(playerChoice, getComputerChoice());
	outcomeArea.textContent = outcome;
	if (outcome === "Win") {
		playerTotal++;
		playerTotalArea.textContent = playerTotal;
	} else if (outcome === "Lose") {
		computerTotal++;
		computerTotalArea.textContent = computerTotal;
	}

	if (playerTotal === 5 || computerTotal === 5) endGame();
}

function endGame() {
	outcomeArea.textContent = `You ${
		playerTotal === 5 ? "won" : "lost"
	} the game!`;
	buttons.forEach((button) => {
		button.toggleAttribute("disabled");
	});
}

buttons.forEach((button) => {
	let playerChoice = button.getAttribute("data-choice");
	button.addEventListener("click", (_e) => playRound(playerChoice));
});
