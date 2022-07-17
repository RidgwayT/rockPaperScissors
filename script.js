let playerSelection = prompt("Please choose either ROCK, PAPER, or SCISSORS."); 
let computerSelection = getComputerChoice()
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      roundWinner = 'player'
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      roundWinner = 'computer'
    }
}   

