let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
let result_p = document.querySelector(".result p");
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

rock.addEventListener('click', () => game('r'))
paper.addEventListener('click', () => game('p'))
scissors.addEventListener('click', () => game('s'))

game = (userChoice) => {
    let choice = computerChoice();
    console.log(userChoice);
    console.log(choice);
    let bothChoice = userChoice + choice
    console.log(bothChoice)
    if ( bothChoice === 'ss' && 'rr' && 'pp' )
    {
        document.querySelector(".result p").innerHTML = `${userChoice} equals to ${choice} ... It's a Draw`;
    }
    else if ( bothChoice === 'sp' && 'pr' && 'rs' ) {
        document.querySelector(".result p").innerHTML = `${userChoice} beats ${choice} ... User Wins!!!`;
        user_Score();
    }
    else if ( bothChoice === 'ps' && 'rp' && 'sr' ) {
        document.querySelector(".result p").innerHTML = `${userChoice} Lost To ${choice} ... Computer is the Winner!!!`;
        computer_Score();
    }
}

computerChoice = () => {
    let choiceArray = ['r', 'p' , 's'];
    let randomChoice = Math.floor(Math.random() * 3);
    return choiceArray[randomChoice];
}

user_Score = () => {
    userScore++;
    userScore_span.innerHTML = userScore;
}

computer_Score = () => {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}