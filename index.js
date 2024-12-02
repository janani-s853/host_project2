var random=Math.floor(Math.random()*100)+1;
console.log(random)
var totalattempts=10;
var totalscore=0;
function reset(){
    random=Math.floor(Math.random()*100)+1;
    console.log(random)
    totalattempts=10;
    document.getElementById("guessno").value="";
    document.getElementById("result").textContent="";
    document.getElementById("attempts").textContent="Attempts: "+totalattempts;
    document.getElementById("score").textContent="Score: "+totalscore;
    var container=document.querySelector(".container");
    container.style.backgroundImage="linear-gradient(to bottom, #00065c, #3f6ae1, #87a4f3)";
    container.style.transform="scale(1)";
    var button=document.getElementById("checkbtn");
    button.textContent="Check";
    button.onclick=check;
}
function check(){
    var a=document.getElementById("guessno").value;
    console.log(a)
    var result=document.getElementById("result");
    var score=document.getElementById("score");
    var attempts=document.getElementById("attempts");
    var container=document.querySelector(".container");
    if(a===""||a<=0){
        result.textContent="Please enter a number between 1 to 100";
        result.style.color="red";
    }else if(a==random){
        result.textContent="🎊 Well done! You won the game! 🎊";
        result.style.color="white";
        totalscore++;
        score.textContent="Score: "+totalscore;
        totalattempts--;
        attempts.textContent="Attempts: "+totalattempts;
        var button=document.getElementById("checkbtn");
        button.textContent="Try Again";
        button.onclick=reset;
    }else if(totalattempts===1){
        result.textContent="Your attempts are over. You lose. Better luck next time!";
        result.style.color="white";
        attempts.textContent="Attempts: 0";
        var button=document.getElementById("checkbtn");
        button.textContent="Try Again";
        button.onclick=reset;
    }else if(a<random){
        result.textContent="My number is greater than "+a;
        result.style.color="#030329";
        totalattempts--;
        attempts.textContent="Attempts: "+totalattempts;
    }else{
        result.textContent="My number is lesser than "+a;
        result.style.color="#030329";
        totalattempts--;
        attempts.textContent="Attempts: "+totalattempts;
    }
}
