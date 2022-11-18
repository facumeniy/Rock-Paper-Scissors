const computerChoices = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scrBtn = document.querySelector("#scissors-button");
const textDisplay = document.querySelector("#text");
const playerDisplay = document.querySelector("#fp-score");
const pcDisplay = document.querySelector("#pc-score");
const allBtn = document.querySelectorAll(".button");

let playerScore = parseInt(playerDisplay.textContent);
let pcScore = parseInt(pcDisplay.textContent);

const winningScore = 5;


function getComputerChoice(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
}


function playRound(playerChoice, pcChoice){
    if(playerChoice === 'ROCK'){
        if(pcChoice === 'paper'){
            textDisplay.textContent = "You lost. Paper beats Rock";
            pcScore++;
            pcDisplay.textContent = pcScore;
        }else if(pcChoice === 'scissors'){
            textDisplay.textContent = "You win! Rock beats Scissors";
            playerScore++;
            playerDisplay.textContent = playerScore;
        }else{
            textDisplay.textContent = "Draw";
        }
    }else if(playerChoice === 'PAPER'){
        if(pcChoice === 'rock'){
            textDisplay.textContent = "You win! Paper beats Rock";
            playerScore++;
            playerDisplay.textContent = playerScore;
        }else if(pcChoice === 'scissors'){
            textDisplay.textContent = "You lost. Scissors beats Paper";
            pcScore++;
            pcDisplay.textContent = pcScore;
        }else{
            textDisplay.textContent = "Draw";
        }
    }else if(playerChoice === 'SCISSORS'){
        if(pcChoice === 'rock'){
            textDisplay.textContent = "You lost. Rock beats Scissors";
            pcScore++;
            pcDisplay.textContent = pcScore;
        }else if(pcChoice === 'paper'){
            textDisplay.textContent = "You win! Scissors beats Paper";
            playerScore++;
            playerDisplay.textContent = playerScore;
        }else{
            textDisplay.textContent = "Draw";
        }
    }else{
        console.log("Enter a valid option");
    }
}

rockBtn.addEventListener('click', function(){
    const pcChoice = getComputerChoice();
    playRound("ROCK", pcChoice);
});
paperBtn.addEventListener('click', function(){
    const pcChoice = getComputerChoice();
    playRound("PAPER", pcChoice);
});
scrBtn.addEventListener('click', function(){
    const pcChoice = getComputerChoice();
    playRound("SCISSORS", pcChoice);
});