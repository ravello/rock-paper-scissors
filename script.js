function getComputerChoice() {
    let random = Math.random();

    if (random <= 0.333334) {
        return "rock";
    } else if (random <= 0.666667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let theirChoice = prompt("Type rock, paper, or scissors!: ").toLowerCase();

    if (theirChoice === "rock" || theirChoice === "paper" || theirChoice === "scissors") {
        return theirChoice;
    } else {
        alert("Invalid choice! Try again.");
        return getHumanChoice();
    }
}

let humanScore;
let computerScore;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie! You both picked Rock.");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else {  // it must be scissors
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } 
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("It's a tie! You both picked Paper.");
        } else {  // it must be scissors
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } 
    } else {  // it must be scissors
        if (computerChoice === "rock") {   
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        } else {  // it must be scissors
            console.log("It's a tie! You both picked Scissors.");
        } 
    } 
    return;
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final score:");
    console.log("Human: " + humanScore + " Computer: " + computerScore);

    return;
}