function makeBubble(){
    clutter="";
    for(var i=1; i<=181;i++){
        var rn=Math.floor(Math.random()*10)
        clutter+=`<div id="bubble">${rn}</div>`
    }
    
    document.querySelector("#pbtn").innerHTML=clutter
}

var timer=10;
function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".time").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtn").innerHTML=`<h1>GAME OVER</h1> <h1> YOUR SCORE IS: ${score} </h1> `;
        }
    },1000);
}

var hitValue=0
function getnewhit(){
    hitValue=Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent=hitValue;
}

var score=0;
function increaseScore(){
score+=10;
document.querySelector(".score").textContent=score;
}

function ans(){
    document.querySelector("#pbtn").addEventListener("click",function add(dets){
      var value= Number(dets.target.textContent) ;
      if(value==hitValue){
        increaseScore();
        makeBubble();
        getnewhit();
      }  

    });
}


ans();
getnewhit();
runTimer();
makeBubble();



//Math.random() will always give a number between 0 and 1
//Math.floor() will remove the digits after the decimal if the input given is in decimal format