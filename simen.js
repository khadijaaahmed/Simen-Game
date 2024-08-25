let gameSeq=[];
let userSeq=[];
started = false;
level=0;
let h2 = document.querySelector("h2");
btns=["pink","musterd","blue","green"];

document.addEventListener("keypress",function(){
      if(started ==false){
      console.log("game started")}
      started == true;
       levelUp();
      });
      
      

function levelUp(){
      userSeq=[];
      level++;
      h2.innerText= `Level ${level}`;
      let randIdx = Math.floor(Math.random()*3);
      let randColor = btns[randIdx];
      let randBtn = document.querySelector(`.${randColor}`);
      gameSeq.push(randColor);
      console.log(gameSeq);
       gameFlash(randBtn);
}

function checkAns(idx){
      if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length ==gameSeq.length){
        setTimeout(levelUp(),1000);
      }           
}
      else{
            h2.innerHTML=`Oop ! You lose the Game<b>Your score was ${level * 3}</b><br> Press any key to start again`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout((function(){
                  document.querySelector("body").style.backgroundColor="white"}),400);
        
            reset();
      }
}
function reset(){
      started=false;
      userSeq=[];
      gameSeq=[];
      h3.innerText='Your Last Score was',level;
      level=0;
      let h3 = document.querySelector("h3");
      

}


function gameFlash(btn){
       btn.classList.add("white");
      setTimeout(function(){
         btn.classList.remove("white");
      },250);
 }

function userFlash(btn){
      btn.classList.add("azure");
      setTimeout(function(){
         btn.classList.remove("azure");
      },250);
}



function btnPress(){
      let btn = this;
      console.log("button press");
      // console.log(this);
      userFlash(btn);
       let userColor=btn.getAttribute("id");
       userSeq.push(userColor);
       console.log(userSeq);
       checkAns(userSeq.length-1);
}





let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
      btn.addEventListener("click",btnPress);
      
}
