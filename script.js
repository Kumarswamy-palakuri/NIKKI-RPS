let userScore = 0;
let computerScore = 0;

// Elements for score display
const userScoreElement = document.querySelector('.y-score h2');
const computerScoreElement = document.querySelector('.c-score h2');

// Elements for game result display
const userChoiceElement = document.querySelector('.user-choice button');
const computerChoiceElement = document.querySelector('.computer-choice button');
const resultMessage = document.querySelector('.middle h2');
const resultDetail = document.querySelector('.middle h6');
const playAgainButton = document.querySelector('.middle button');
const nextButton = document.querySelector('.next-button');
const hurray = document.querySelector('.hurray');
const playAgainButtonNext = document.querySelector('.hurray button');
//next

// Elements for triangle and game buttons
const triangle = document.querySelector('.triangle');

// Function to generate the computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  document.getElementById('user-choice').classList.add(`button-border-${userChoice}`);
document.getElementById('computer-choice').classList.add(`button-border-${computerChoice}`);
  if (userChoice === computerChoice) {
    return "IT'S A TIE!";
  }

  const outcomes = {
    'rock': { 'scissors': 'YOU WIN!', 'paper': 'YOU LOST' },
    'paper': { 'rock': 'YOU WIN!', 'scissors': 'YOU LOST' },
    'scissors': { 'paper': 'YOU WIN!', 'rock': 'YOU LOST' }
  };
return outcomes[userChoice][computerChoice] || 'INVALID CHOICE';
}
// Function to update the score
function updateScore(winner) {
  if (winner === 'YOU WIN!') {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (winner === 'YOU LOST') {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }
}

// Function to show the result
/*function showResult(userChoice, computerChoice, result) {
  // Clear previous win-border classes
  document.getElementById('rock').classList.remove('win-border');
  document.getElementById('paper').classList.remove('win-border');
  document.getElementById('scissors').classList.remove('win-border');
  document.getElementById('user-choice').classList.remove('win-border');
  document.getElementById('computer-choice').classList.remove('win-border');

  // Update the choices for display
  userChoiceElement.textContent = getEmoji(userChoice);
  computerChoiceElement.textContent = getEmoji(computerChoice);

  // Display result message in uppercase
  resultMessage.textContent = result;

  if (result === 'YOU WIN!') {
    resultDetail.textContent = 'AGAINST PC';
    document.getElementById("user-choice").classList.add('win-border');
  } else if (result === 'YOU LOST') {
    resultDetail.textContent = 'AGAINST PC';
    document.getElementById("computer-choice").classList.add('win-border');
  } else if (result === "IT'S A TIE!") {
    resultDetail.textContent = '';
  }

  // Show final results section
  document.querySelector('.end-choice').style.display = 'flex';
}*/
function showResult(userChoice, computerChoice, result) {
  // Clear previous border classes

  document.getElementById('rock').classList.remove('win-border');
  document.getElementById('paper').classList.remove('win-border');
  document.getElementById('scissors').classList.remove('win-border');
  document.getElementById('user-choice').classList.remove('win-border');
  document.getElementById('computer-choice').classList.remove('win-border');
  document.getElementById('user-choice').classList.remove('button-border-scissors');
  document.getElementById('user-choice').classList.remove('button-border-rock');
  document.getElementById('user-choice').classList.remove('button-border-paper');
  document.getElementById('computer-choice').classList.remove('button-border-scissors');
  document.getElementById('computer-choice').classList.remove('button-border-rock');
  document.getElementById('computer-choice').classList.remove('button-border-paper');


  // Update the choices for display
  userChoiceElement.textContent = getEmoji(userChoice);
  computerChoiceElement.textContent = getEmoji(computerChoice);

  // Apply border styles based on choices
  document.getElementById('user-choice').classList.add(`button-border-${userChoice}`);
  document.getElementById('computer-choice').classList.add(`button-border-${computerChoice}`);

  // Display result message in uppercase
  resultMessage.textContent = result;

  if (result === 'YOU WIN!') {
    resultDetail.textContent = 'AGAINST PC';
    document.getElementById('user-choice').classList.add('win-border');
    nextButton.style.display='block';

  } else if (result === 'YOU LOST') {
    resultDetail.textContent = 'AGAINST PC';
    document.getElementById('computer-choice').classList.add('win-border');
    nextButton.style.display='none';
  } else if (result === "IT'S A TIE!") {
    resultDetail.textContent = '';
    nextButton.style.display='none';
  }

  // Show final results section
  document.querySelector('.end-choice').style.display = 'flex';
}

// Function to get emoji based on the choice
function getEmoji(choice) {
  if (choice === 'rock') return '✊';
  if (choice === 'paper') return '✋';
  if (choice === 'scissors') return '✌️';
}

// Function to handle the user's choice
function selectChoice(userChoice) {
  // Hide the triangle when a choice is selected
  triangle.style.display = 'none';

  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  updateScore(result);  // Update score based on the result
  showResult(userChoice, computerChoice, result);
}

// Play Again functionality
playAgainButton.addEventListener('click', () => {
  document.querySelector('.end-choice').style.display = 'none';
  triangle.style.display = 'block'; // Show the triangle again when playing again

  // Remove win-border class from all choices when playing again
  document.getElementById("user-choice").classList.remove('win-border');
  document.getElementById("computer-choice").classList.remove('win-border');

});

// Popup functionality for showing rules
function showPopup() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('rulesPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('rulesPopup').style.display = 'none';
}

//next
nextButton.addEventListener('click', () => {

  if(computerScore<userScore)
  {

    computerScore=0;
    userScore=0;
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
    playAgainButtonNext.addEventListener('click', () => {
      document.querySelector('.end-choice').style.display = 'none';
      triangle.style.display = 'block'; // Show the triangle again when playing again
    
      // Remove win-border class from all choices when playing again
      document.getElementById("user-choice").classList.remove('win-border');
      document.getElementById("computer-choice").classList.remove('win-border');
      hurray.style.display='none';
    });
    nextButton.style.display='none';
    hurray.style.display='block';
  }


})

// Event listeners for game choices
document.getElementById('rock').addEventListener('click', () => selectChoice('rock'));
document.getElementById('paper').addEventListener('click', () => selectChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => selectChoice('scissors'));
