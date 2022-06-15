let click=new Audio('click.mp3')
let turn="X"

const changeTurn=()=>{
    return turn=="X"?"0":"X";
}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach((e)=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='')){
            document.getElementById("win").innerText=boxtext[e[0]].innerText+" wins"
        }
    })
}

let box=document.getElementsByClassName("box");
Array.from(box).forEach((el)=>{
    let boxtext=el.querySelector(".boxtext")
el.addEventListener('click',()=>{
    click.play();
    if(boxtext.innerText===""){
        boxtext.innerText=turn;
        turn=changeTurn()
        checkWin();

    }
})
})