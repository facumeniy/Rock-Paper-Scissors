const computerChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
}

function playRound(playerChoice, pcChoice){
    if(playerChoice === 'ROCK'){
        if(pcChoice === 'paper'){
            console.log("You lost. Paper beats Rock");
        }else if(pcChoice === 'scissors'){
            console.log("You win! Rock beats Scissors");
        }else{
            console.log("Draw");
        }
    }else if(playerChoice === 'PAPER'){
        if(pcChoice === 'rock'){
            console.log("You win! Paper beats Rock");
        }else if(pcChoice === 'scissors'){
            console.log("You lost. Scissors beats Paper");
        }else{
            console.log("Draw");
        }
    }else if(playerChoice === 'SCISSORS'){
        if(pcChoice === 'rock'){
            console.log("You lost. Rock beats Scissors");
        }else if(pcChoice === 'paper'){
            console.log("You win! Scissors beats Paper");
        }else{
            console.log("Draw");
        }
    }else{
        console.log("Enter a valid option");
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose Rock, Paper or Scissors").toUpperCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();