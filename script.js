let playerSelection = prompt("Choose ROCK PAPER SCISSORS");
const computerSelection = getComputerChoice();
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;
let result = '';



function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
      return "It/'s a tie!"
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      roundWinner = 'player'
      return roundWinner + " wins! " + playerSelection + " beats " + computerSelection + "!";
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      roundWinner = 'computer'
      return roundWinner + " wins! " + computerSelection + " beats " + playerSelection + "!";
    }
}   

console.log(playRound(playerSelection, computerSelection)) 
