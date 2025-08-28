let humanScore = 0;
let computerScore = 0;
let gameEnd = false;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            // console.log("It's a tie! You both picked Rock.");
            return "It's a tie! You both picked Rock.";
        } else if (computerChoice === "paper") {
            computerScore++;
            // console.log("You lose! Paper beats Rock.");
            return "You lose! Paper beats Rock.";
        } else {  // it must be scissors
            humanScore++;
            // console.log("You win! Rock beats Scissors.");
            return "You win! Rock beats Scissors.";
        } 
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            // console.log("You win! Paper beats Rock.");
            return "You win! Paper beats Rock.";
        } else if (computerChoice === "paper") {
            // console.log("It's a tie! You both picked Paper.");
            return "It's a tie! You both picked Paper.";
        } else {  // it must be scissors
            computerScore++;
            // console.log("You lose! Scissors beats Paper.");
            return "You lose! Scissors beats Paper.";
        } 
    } else {  // it must be scissors
        if (computerChoice === "rock") {   
            computerScore++;
            // console.log("You lose! Rock beats Scissors.");
            return "You lose! Rock beats Scissors.";
        } else if (computerChoice === "paper") {
            humanScore++;
            // console.log("You win! Scissors beats Paper.");
            return "You win! Scissors beats Paper.";
        } else {  // it must be scissors
            // console.log("It's a tie! You both picked Scissors.");
            return "It's a tie! You both picked Scissors.";
        } 
    } 
    return;
}

const buttons = document.querySelector("#buttons");
const div = document.querySelector("#countingResults");
const desc = document.querySelector("#description");

buttons.addEventListener("click", function(e) {
    if (!gameEnd) {  // if the game hasn't ended
        // call getComputerChoice
        const computerChoice = getComputerChoice();

        // call playround & get human choice
        const result = playRound(e.target.id, computerChoice);

        // update results
        div.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
        desc.textContent = result;

        if (humanScore === 5 || computerScore === 5) {
            gameEnd = true;
            document.querySelector("#finalResults").textContent = "Game over!"
        } 
    }
});