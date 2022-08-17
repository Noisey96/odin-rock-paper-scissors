const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
	let playerChoice;
	while (!playerChoice) {
		playerChoice = prompt("Please input rock, paper, or scissors!");
		playerChoice = playerChoice.toLowerCase();
		if (!choices.includes(playerChoice)) {
			playerChoice = "";
			alert("Invalid input. Please try again!");
		}
	}
	return playerChoice;
}

function playRound(playerChoice, computerChoice) {
	switch (playerChoice === "rock") {
		case computerChoice === "rock":
			return "Tie";
		case computerChoice === "paper":
			return "Lost";
		case computerChoice === "scissors":
			return "Won";
	}
	switch (playerChoice === "paper") {
		case computerChoice === "rock":
			return "Won";
		case computerChoice === "paper":
			return "Tie";
		case computerChoice === "scissors":
			return "Lost";
	}
	switch (playerChoice === "scissors") {
		case computerChoice === "rock":
			return "Lost";
		case computerChoice === "paper":
			return "Won";
		case computerChoice === "scissors":
			return "Tie";
	}
}

function game() {
	let playerWins = 0;
	let computerWins = 0;
	let ties = 0;
	for (let i = 0; i < 5; i++) {
		let computerChoice = getComputerChoice();
		let playerChoice = getPlayerChoice();
		let outcome = playRound(playerChoice, computerChoice);
		console.log(outcome);

		if (outcome === "Tie") ties++;
		else if (outcome === "Won") playerWins++;
		else if (outcome === "Lost") computerWins++;
	}

	if (playerWins === computerWins) {
		console.log(
			`Nobody won, because you and computer tied at ${playerWins} \
win${playerWins === 1 ? "" : "s"}!`
		);
	} else {
		console.log(
			`${
				playerWins > computerWins ? "You" : "The computer"
			} won overall, \
because you had ${playerWins} win${playerWins === 1 ? "" : "s"}, \
while the computer had ${computerWins} win${computerWins === 1 ? "" : "s"}!`
		);
	}
}

game();
