function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[getRandomInt(3)];
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

function playRound(playerOne, playerTwo){
    
    let playerOneSelection = playerOne.play();
    let playerTwoSelection = playerTwo.play();

    if(playerOneSelection == playerTwoSelection){
        return `Nobody wins, you both had ${playerTwoSelection}.`;
    }
    if(playerOneSelection == "paper" && playerTwoSelection == "rock"){
        playerOne.score++;
        return `You lose. Computers ${playerOneSelection} beats your ${playerTwoSelection}`;
    }
    if(playerOneSelection == "paper" && playerTwoSelection == "scissor"){
        playerTwo.score++;
        return `You win. Computers ${playerOneSelection} losses against your ${playerTwoSelection}`;
    }
    if(playerOneSelection == "rock" && playerTwoSelection == "scissor"){
        playerOne.score++;
        return `You lose. Computers ${playerOneSelection} beats your ${playerTwoSelection}`;
    }
    if(playerOneSelection == "rock" && playerTwoSelection == "paper"){
        playerTwo.score++;
        return `You win. Computers ${playerOneSelection} losses against your${playerTwoSelection}`;
    }
    if(playerOneSelection == "scissor" && playerTwoSelection == "paper"){
        playerOne.score++;
        return `You lose. Computers ${playerOneSelection} beats your ${playerTwoSelection}`;
    }
    if(playerOneSelection == "scissor" && playerTwoSelection == "rock"){
        playerTwo.score++;
        return `You win. Computers ${playerTwoSelection} losses against your ${playerTwoSelection}`;
    }
}

function game(){
    
    let rounds = prompt("Welcome to Paper, Rock and Scissors. Have Fun! Choose how many rounds you want to play:")
    rounds = parseInt(rounds);
   
    while (isNaN(rounds) || rounds < 0){
        rounds = prompt("Please enter a only (positive) numbers. Try again!");
        rounds = parseInt(rounds);
    }

    let computerPlayer = new player("Computer", 0, computerPlay);
    let humanPlayer = new player("Human", 0, playerPlay);

    for (let i = 0; i < rounds; i++) {
        alert(`Get ready for round ${i + 1}!`);
        alert(playRound(computerPlayer, humanPlayer));
    }

    alert(calculateWinner(computerPlayer.score, humanPlayer.score));
    
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

// MODEL
function player(name="", score=0, play){
    
    let self = this;

    self.name = name;
    self.score = score;
    self.play = play;

    return self;
}


game();
