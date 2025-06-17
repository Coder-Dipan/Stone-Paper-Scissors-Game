//Score Declaration
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Declaration Random Choices of Compueter
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    Math.floor(Math.random() * 3);
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//Draw Game Function
const drawGame = () => {
    msg.innerText = "Game was Draw! Play Again.";
    msg.style.backgroundColor = "rgb(58, 13, 58)";
};

//Winner Function
const showWinner = (userWin, userChoice, compChoice) => {
    // User Win Function
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } 
    // Computer Win Function
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//Game Playing Conditions
const playGame = (userChoice) =>{
    //Generate computer choice -> modular
    const compChoice = genCompChoice();

    // game draw condition
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    // User and Computer Winning Conditions 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice == "paper"){
            //rock, scissors
            userWin= compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        //Call Winning Function
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});