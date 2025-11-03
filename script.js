const box = document.querySelectorAll(".btn");
const newbtn = document.querySelector("#newGame");
const rstbtn = document.querySelector("#reset");
const msgCon = document.querySelector(".msgContainer");
const msg = document.querySelector(".msg");

let player0Turn = true;

let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7], 
    [2, 5, 8],
    [2, 4, 6],
];


box.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        if(player0Turn == true){
            btn.innerText = "0";
            player0Turn = false;
        }else{
            btn.innerText = "X";
            player0Turn = true;
        }
        btn.disabled= true;

        checkWinner();
    });
});

checkWinner = () =>{
    for(let pattern of winpattern){
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is  ${winner}`;
    msgCon.classList.remove("hide");
    disableBox();
}

const disableBox = ()=>{
    for(btn of box){
        btn.disabled = true;
    }
}

const enableBox = ()=>{
    for(btn of box){
        btn.disabled = false;
        btn.innerText = "";
    }
}
const resetGame = ()=>{
    player0Turn = true;
    enableBox();
    msgCon.classList.add("hide");
}

newbtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);