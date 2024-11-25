let botWinCount = 0;
let userWinCount = 0;
let totalCount = 0;
let drawCount = 0;

const btns = document.querySelectorAll(".btns");
const msg = document.querySelector("#resultmsg");
const userResult = document.querySelector("#userwincount");
const botResult = document.querySelector("#botwincount");
const totalGameCount = document.querySelector("#totalgamecount");
const gameDrawCount = document.querySelector("#gamedrawcount");
const resetBtn = document.querySelector("#resetbtn");

btns.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
        
    })
});

const playgame = (userChoice) => {
    const botChoice = genbotChoice();
    // console.log("your choice", userChoice);
    // console.log("bot choice", botChoice);
    totalCount++;
    totalGameCount.innerHTML = totalCount;
    if(userChoice === botChoice){
        gameDraw();
        drawCount++;
        gameDrawCount.innerHTML = drawCount;
    }else{
        let userWin = true;
        if( userChoice === "rock"){
            // paper, scissor
            userWin = botChoice === "paper" ? false : true;
        }else if( userChoice === "paper"){
            // rock, scissor
            userWin = botChoice === "scissor" ? false : true;
        }else{
            // rock, paper
            userWin = botChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);
    }

};

const genbotChoice = () => {
    const choices = ["rock" , "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return choices[randomIdx];
};

const gameDraw = () => {
    // console.log("GAME DRAW");
    msg.innerHTML = "Game Drawn";
    msg.style.backgroundColor = "rgb(195, 206, 206)";
};

const showWinner = (userWin, userChoice, botChoice) => {
    
    if(userWin){
        // console.log("you win");
        msg.innerHTML = `You Win, your ${userChoice} beat ${botChoice}`;
        msg.style.backgroundColor = "green";
        userWinCount++;
        userResult.innerHTML = userWinCount;
    }else{
        // console.log("bot win");
        msg.innerHTML = `You Lose, ${botChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "red";
        botWinCount++;
        botResult.innerHTML = botWinCount;
    }
};

resetBtn.addEventListener(("click"), () => {
    // botWinCount = 0;
    // botResult.innerHTML = botWinCount;
    // userWinCount = 0;
    // userResult.innerHTML = userWinCount;
    // totalCount = 0;
    // totalGameCount.innerHTML = totalCount;
    // drawCount = 0;
    // gameDrawCount.innerHTML = drawCount;
    // msg.innerHTML = "Choose Your's";
    location.reload(); // Refreshes the page

})