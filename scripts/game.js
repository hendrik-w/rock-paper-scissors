function computerPlay(){
    
    let randomNumber = getRandomInt(3);
    let computerSelection;

    switch(randomNumber){
        case 0:
            computerSelection = "paper";
            break;
        case 1:
            computerSelection = "rock";
            break;
        case 2: 
            computerSelection = "scissor";
            break;
        default:
            computerSelection = "paper";
    }

    return computerSelection;
}

function playerPlay(){
    let playerSelection;
    let validSelection = false;

    while(!validSelection){
        playerSelection = prompt("Paper, rock or scissor? Choose wisely!");
        playerSelection = playerSelection.toLowerCase();

        switch (playerSelection){
            case "paper":
            case "rock":
            case "scissor":
                validSelection = true;
                break;
            default:
                validSelection = false;
                alert("Your choice wasn't valid. Please choose again.");
        }
    }
    
    return playerSelection;
}

function playRound(computerSelection, playerSelection, computerScore, playerScore){
    if(computerSelection == playerSelection){
        return `Nobody wins, you both had ${playerSelection}.`;
    }
    if(computerSelection == "paper" && playerSelection == "rock"){
        computerScore.value++;
        return `You lose. Computers ${computerSelection} beats your ${playerSelection}`;
    }
    if(computerSelection == "paper" && playerSelection == "scissor"){
        playerScore.value++;
        return `You win. Computers ${computerSelection} losses against your ${playerSelection}`;
    }
    if(computerSelection == "rock" && playerSelection == "scissor"){
        computerScore.value++;
        return `You lose. Computers ${computerSelection} beats your ${playerSelection}`;
    }
    if(computerSelection == "rock" && playerSelection == "paper"){
        playerScore.value++;
        return `You win. Computers ${computerSelection} losses against your${playerSelection}`;
    }
    if(computerSelection == "scissor" && playerSelection == "paper"){
        computerScore.value++;
        return `You lose. Computers ${computerSelection} beats your ${playerSelection}`;
    }
    if(computerSelection == "scissor" && playerSelection == "rock"){
        playerScore.value++;
        return `You win. Computers ${computerSelection} losses against your ${playerSelection}`;
    }
}

function game(){
    
    let rounds = prompt("Welcome to Paper, Rock and Scissors. Have Fun! Choose how many rounds you want to play:")
    rounds = parseInt(rounds);
   
    while (isNaN(rounds) || rounds < 0){
        rounds = prompt("Please enter a only (positive) numbers. Try again!");
        rounds = parseInt(rounds);
    }

    let computerScore = {value : 0};
    let playerScore = {value : 0};

    for (let i = 0; i < rounds; i++) {
        alert(`Get ready for round ${i + 1}!`);
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        alert(playRound(computerSelection, playerSelection, computerScore, playerScore));
    }

    alert(calculateWinner(computerScore.value, playerScore.value));
    
}

// HELPER FUNCTIONS
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function calculateWinner(computerScore, playerScore){
    if(computerScore > playerScore){
        return `You lose with ${playerScore} to ${computerScore} points.`
    }
    else if(computerScore == playerScore){
        return `Nobody wins. You both had ${playerScore} points.`
    }
    return `You win with ${playerScore} to ${computerScore} points.`
}


game();
