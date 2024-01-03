let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn= document.querySelector("#new");
let messagecont= document.querySelector(".message");
let mess= document.querySelector("#mess");
let turnX= true;
count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText= "X";
            turnX=false;
        }else{
            box.innerText= "O";
            turnX= true;
        }
        box.disabled= true;
        let iswinner= checkwinner();
        count++;
        if(count===9&& !iswinner){
            mess.innerText= "Game Draw";
            messagecont.classList.remove("hide");
        }
    })
    
})

const showwinner = (winner)=>{
    mess.innerText= `Winner is ${winner}`;
    messagecont.classList.remove("hide");
}
const checkwinner = ()=>{
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&& pos3!=""){
            if(pos1===pos2  && pos2===pos3){
                showwinner(pos1);
                return true;
            }
        }
    }
}

const enableboxes= ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const gamereset= ()=>{
    turnX=true;
    messagecont.classList.add("hide");
    enableboxes();
}

newbtn.addEventListener("click", gamereset);
resetbtn.addEventListener("click",gamereset);