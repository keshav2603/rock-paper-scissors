let userScore=0;
let compScore=0;
let userScoreElement=document.querySelector('#user-score');

let compScoreElement=document.querySelector('#comp-score');

let winnerMessageElement=document.querySelector('#winner-msg');

let playerAttack=document.querySelector('#choice-player-attack');

let computerAttack=document.querySelector('#choice-comp-attack');

// Function to generate computer choice
const getComputerChoice=()=> {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// function to get winner
const determineWinner=(userChoice,compChoice)=>{
    if( userChoice===compChoice)
    {
        winnerMessageElement.textContent="it's a tie!";
    }
    else if(
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ){
        userScore++;
        winnerMessageElement.textContent="You Win";
    }
    else{
        compScore++;
        winnerMessageElement.textContent="computer win";
    }
    // update attack images
    playerAttack.innerHTML=`<img src="/RPS images/${userChoice}.png" alt="Player Attack">`;
    computerAttack.innerHTML=`<img src="/RPS images/${compChoice}.png" alt="Player Attack">`;
}

// Function to update the score 
const updateScore=()=> {
    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
}

//event listner for user choice
document.querySelectorAll(".choice").forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        let computerChoice = getComputerChoice();
        determineWinner(userChoice, computerChoice);
        updateScore();
    })
});