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
        case 3: 
            computerSelection = "scissor";
            break;
        default:
            computerSelection = "paper";
    }

    return computerSelection;
}

function playerPlay(){
    let playerSelection;
    let gultySelection = false;

    while(!gultySelection){
        playerSelection = prompt("Paper, rock or scissor? Choose whisly!");
        playerSelection = playerSelection.toLowerCase();

        switch (playerSelection){
            case "paper":
                gultySelection = true;
                break;
            case "rock":
                gultySelection = true;
                break;
            case "scissor":
                gultySelection = true;
            default:
                gultySelection = false;
                alert("Your choice wasn't gulty. Please choose again.");
        }
    }
    
    return playerSelection;
}

function playRound(computerSelection, playerSelection){
    if(computerSelection == playerSelection){
        return `Nobody wins, you both had ${playerSelection}.`;
    }
    if(computerSelection == "paper" && playerSelection == "rock"){
        return `You lose. Computers ${computerSelection} beats ${playerSelection}`;
    }
    if(computerSelection == "paper" && playerSelection == "scissor"){
        return `You win. Computers ${computerSelection} losses against ${playerSelection}`;
    }
    if(computerSelection == "rock" && playerSelection == "scissor"){
        return `You lose. Computers ${computerSelection} beats ${playerSelection}`;
    }
    if(computerSelection == "rock" && playerSelection == "paper"){
        return `You win. Computers ${computerSelection} losses against ${playerSelection}`;
    }
    if(computerSelection == "scissor" && playerSelection == "paper"){
        return `You lose. Computers ${computerSelection} beats ${playerSelection}`;
    }
    if(computerSelection == "scissor" && playerSelection == "rock"){
        return `You win. Computers ${computerSelection} losses against ${playerSelection}`;
    }
}

function game(){
    alert("Welcome to Paper, Rock and Scissors. Have Fun!")
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    alert(playRound(computerSelection, playerSelection));
}

// HELPER FUNCTIONS
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// RUNTIME
game();
