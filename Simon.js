let gameSeq=[];
let UserSeq=[];

let btns = ["one","two","three","four"];

let started= false;

let level =0;
let h3 = document.querySelector('h3');

document.addEventListener("keypress",function(){
    
   if(started==false){
   h3.innerText="Game started";
   console.log("game started");
   started=true;
   levelUp();

   }
    
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);

}

function levelUp(){
   UserSeq=[];

   level++;
   
   console.log(`Level ${level}`);

   h3.innerText=`Level ${level}`;

   let random = Math.floor(Math.random()*4);
   let index = btns[random];
   let randbtn = document.querySelector(`.${index}`);

   gameSeq.push(randbtn);

   console.log(gameSeq);

   btnFlash(randbtn);

}

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
      btn.classList.remove("userFlash");
   },250);

}


function checkAns(idx){
    
     if(UserSeq[idx]==gameSeq[idx].getAttribute("id")){

      if(UserSeq.length==gameSeq.length){

         setTimeout(levelUp,1000);
      }

     }
     else {
      h3.innerHTML=`GAME OVER! Your Score is <b>${level}</b>.<br>
       Press Restart key to start again.`;

     document.querySelector('body').style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector('body').style.backgroundColor="white";
      },400);
   }
}


function btnpress(){
   console.log(this);

   let btn = this;
   userFlash(btn);

   let usercolor = btn.getAttribute('id');

   console.log(usercolor);

   UserSeq.push(usercolor);
   checkAns(UserSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btton of allBtns){
   btton.addEventListener("click",btnpress);

}

let resetbtn = document.querySelector('.restart');

resetbtn.addEventListener('click',function(){
   UserSeq=[];
   gameSeq=[];
   started=false;
   level =0;
   h3.innerText="Press any key to start the game";
});