let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true ; //playerX player0

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() => {
    turn0 = true;
    enabledboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        if(turn0) {
            box.innerText ="0";
            turn0 = false;
        } else {
            box.innerText ="X";
            turn0 =true;
        }
        box.disabled = true ;
        checkWinner();
    });
});

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner)=> {
    msg.innerText ='Congratulation, you are winner';
    msgcontainer.classList.remove("hide");
    disabledboxes();
};


const checkWinner = () => {
    for ( let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val) {
        if(pos1val === pos2val && pos2val === pos3val ){
            showWinner(pos1val);
        }
    }    
    }
};

newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);