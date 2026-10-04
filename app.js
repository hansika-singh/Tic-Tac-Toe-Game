let btn = document.querySelector("#mode");
let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");


let turn0 = true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame =  () => {
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
    }
    box.disabled = true;
    checkWinner();
})
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerTExt = `Congratulatiosn, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner =  () => {
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }

}

newGamebtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click",resetGame);

current_mode = "light";
btn.addEventListener("click",() => {
    if(current_mode ==="light"){
        current_mode = "dark";
        document.body.classList.add("dark");
    }
    else{
        current_mode = "light";
        document.body.classList.remove("dark");
    }
});

