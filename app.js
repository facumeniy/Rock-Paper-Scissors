const computerChoices = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scrBtn = document.querySelector("#scissors-button");
const textDisplay = document.querySelector("#text");
const playerDisplay = document.querySelector("#fp-score");
const pcDisplay = document.querySelector("#pc-score");
const allBtn = document.querySelectorAll(".button");
const resetBtn = document.querySelector("#reset-button");
const playerName = document.querySelector("#pl-name");
const pcName = document.querySelector("#pl2-name");


let playerScore = parseInt(playerDisplay.textContent);
let pcScore = parseInt(pcDisplay.textContent);

const winningScore = 5;


function getComputerChoice(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
}


function playRound(playerChoice, pcChoice){
    if(playerChoice === 'ROCK'){
        if(pcChoice === 'paper'){
            paperBtn.classList.add("win-select");
            rockBtn.classList.add("pc-select");
            textDisplay.textContent = "You lost. Paper beats Rock";
            pcScore++;
            pcDisplay.textContent = pcScore;
        }else if(pcChoice === 'scissors'){
            scrBtn.classList.add("pc-select");
            rockBtn.classList.add("win-select");
            textDisplay.textContent = "You win! Rock beats Scissors";
            playerScore++;
            playerDisplay.textContent = playerScore;
        }else{
            rockBtn.classList.add("draw");
            textDisplay.textContent = "Draw";
        }
    }else if(playerChoice === 'PAPER'){
        if(pcChoice === 'rock'){
            rockBtn.classList.add("pc-select");
            paperBtn.classList.add("win-select");
            textDisplay.textContent = "You win! Paper beats Rock";
            playerScore++;
            playerDisplay.textContent = playerScore;
        }else if(pcChoice === 'scissors'){
            scrBtn.classList.add("win-select");
            paperBtn.classList.add("pc-select");
            textDisplay.textContent = "You lost. Scissors beats Paper";
            pcScore++;
            pcDisplay.textContent = pcScore;
        }else{
            paperBtn.classList.add("draw");
            textDisplay.textContent = "Draw";
        }
    }else if(playerChoice === 'SCISSORS'){
        if(pcChoice === 'rock'){
            rockBtn.classList.add("win-select");
            scrBtn.classList.add("pc-select");
            textDisplay.textContent = "You lost. Rock beats Scissors";
            pcScore++;
            pcDisplay.textContent = pcScore;
        }else if(pcChoice === 'paper'){
            scrBtn.classList.add("win-select");
            paperBtn.classList.add("pc-select");
            textDisplay.textContent = "You win! Scissors beats Paper";
            playerScore++;
            playerDisplay.textContent = playerScore;
        }else{
            scrBtn.classList.add("draw");
            textDisplay.textContent = "Draw";
        }
    }else{
        console.log("Enter a valid option");
    }
}

function classRemove(){
    paperBtn.classList.remove("win-select");
    scrBtn.classList.remove("win-select");
    rockBtn.classList.remove("win-select");
    paperBtn.classList.remove("pc-select");
    scrBtn.classList.remove("pc-select");
    rockBtn.classList.remove("pc-select");
    paperBtn.classList.remove("draw");
    scrBtn.classList.remove("draw");
    rockBtn.classList.remove("draw");
    rockBtn.classList.remove("player-select");
    paperBtn.classList.remove("player-select");
    scrBtn.classList.remove("player-select");
};

function checkWin(score1, score2){
    if(score1 === winningScore){
        textDisplay.textContent = "Player wins!"
        playerDisplay.classList.add("winner");
        pcDisplay.classList.add("loser");
        for(let btn of allBtn){
            btn.disabled = true;
            btn.classList.add("disabledButton");
        }
        classRemove();
    }else if(score2 === winningScore){
        textDisplay.textContent = "PC wins"
        playerDisplay.classList.add("loser");
        pcDisplay.classList.add("winner");
        for(let btn of allBtn){
            btn.disabled = true;
            btn.classList.add("disabledButton");
        }
        classRemove();
    }
};

rockBtn.addEventListener('click', function(){
    classRemove();
    const pcChoice = getComputerChoice();
    playRound("ROCK", pcChoice);
    checkWin(playerScore, pcScore);
});
paperBtn.addEventListener('click', function(){
    classRemove();
    const pcChoice = getComputerChoice();
    playRound("PAPER", pcChoice);
    checkWin(playerScore, pcScore);
});
scrBtn.addEventListener('click', function(){
    classRemove();
    const pcChoice = getComputerChoice();
    playRound("SCISSORS", pcChoice);
    checkWin(playerScore, pcScore);
});

resetBtn.addEventListener('click', function(){
    playerScore = 0;
    pcScore = 0;
    playerDisplay.textContent = 0;
    pcDisplay.textContent = 0;
    textDisplay.textContent = "Choose Rock, Paper or Scissors";
    playerDisplay.classList.remove("winner");
    pcDisplay.classList.remove("winner");
    playerDisplay.classList.remove("loser");
    pcDisplay.classList.remove("loser");
    classRemove();
    for(let btn of allBtn){
        btn.disabled = false;
        btn.classList.remove("disabledButton");
    }
});