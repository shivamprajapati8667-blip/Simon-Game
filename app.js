let gameSeq=[];
let userSeq=[];
scores=[];
btns=["yellow","red","green","purple"];

let started=false;
let level=0;
h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started== false){
        console.log("game is started");
        started=true;
       levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function()  {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
       btn.classList.add("userflash");
    setTimeout(function()  {
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
     userSeq=[];

    level++;
    h2.innerText= `level ${level}`;

    //random btn choose
    
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

}

function checkAns(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }
    else{document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="aqua";
        },150);
        h2.innerHTML=`Game Over!<b>Your Score was ${level}. <br>Press any key to reset the game.`;
        
        score=level;
        
        scores.push(score);
        highestSco();
        reset();
       }
    }


    

function btnPress(){
    
   let btn=this;
   userFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userColor);
    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
  
}

function highestSco(){
    highestscore=0;
    for(i=0;i<scores.length;i++){
        if(scores[i]>highestscore){
            highestscore=scores[i];
        }
    }
    h4=document.createElement("h4");
    h4.innerText=`Highest score was ${highestscore}`;
    h2.appendChild(h4);
    
}
