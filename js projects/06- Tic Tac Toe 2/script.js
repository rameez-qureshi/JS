let btns = document.querySelectorAll(".btns");
let resetBtn = document.querySelector("#resetbtn");
let resultHeading = document.querySelector("#resultheading");

let turnx = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turnx){
            btn.innerHTML = "X";
            turnx = false;
        }else{
            btn.innerHTML = "O";
            turnx = true;
        }
        btn.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(btns[pattern[0]].innerText,btns[pattern[1]].innerText,btns[pattern[2]].innerText);
        
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (winner) => {
    resultHeading.innerText = `Winner is ${winner}`;
    disabledBtns();
    resetBtn.innerText = "New Game";
}

const resetGame = () =>{
    turnx = true;
    enableBtns();
    resetBtn.innerText = "Reset Game";
    resultHeading.innerText = "";
}

const disabledBtns = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
}

const enableBtns = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";  
    }
}

resetBtn.addEventListener("click", resetGame);