let userScore= 0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScoring=document.querySelector("#user-score");
const compscoring=document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText="Game was Draw.play again.";
    msg.style.backgroundColor="#081b31";
};


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoring.innerText=userScore;
        msg.innerText=`You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscoring.innerText=compScore;
        msg.innerText= `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    // console.log("userchoice is ",userChoice);
    // to generate computerchoice
    // using functions is the modular way of solving problem
    //reusable components


    const compChoice=genComChoice();
    console.log("computer choice is ",compChoice);
    if (userChoice===compChoice){
        //game draw
        drawGame();
    }else{
        let userWin="true";
        if(userChoice==="rock"){
            //scissors.paper
            userWin=compChoice ==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};
const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndX=Math.floor(Math.random() * 3);
    return options[randIndX];
};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
});