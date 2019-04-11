const hand = ["rock","paper","scissors"];
const playerName = prompt("What is your name","You")
var text;
var cpuScore = 0;
var playerScore = 0;
function rock(){
    cpuHand = hand[parseInt(Math.random()*10)%3];
    if(cpuHand === 'rock'){
        text = "This round is a draw, try again!"
    }else if(cpuHand === 'scissors'){
        text = "You've won this round, congrats!";
        playerScore ++;
    }else{
        text = "You lost this round. What a loser!"
        cpuScore ++;
    };
    document.getElementById("roundResult").innerHTML = text;
    document.getElementById("cpuScore").innerHTML = cpuScore;
    document.getElementById("playerScore").innerHTML = playerScore;
};
function paper(){
    cpuHand = hand[parseInt(Math.random()*10)%3];
    if(cpuHand === 'paper'){
        text = "This round is a draw, try again!"
    }else if(cpuHand === 'rock'){
        text = "You've won this round, congrats!";
        playerScore ++;
    }else{
        text = "You lost this round. What a loser!";
        cpuScore ++;
    };
    document.getElementById("roundResult").innerHTML = text;
    document.getElementById("cpuScore").innerHTML = cpuScore;
    document.getElementById("playerScore").innerHTML = playerScore;
};
function scissors(){
    cpuHand = hand[parseInt(Math.random()*10)%3];
    if(cpuHand === 'scissors'){
        text = "This round is a draw, try again!"
    }else if(cpuHand === 'paper'){
        text = "You've won this round, congrats!";
        playerScore ++;
    }else{
        text = "You lost this round. What a loser!"
        cpuScore ++;
    };
    document.getElementById("roundResult").innerHTML = text;
    document.getElementById("cpuScore").innerHTML = cpuScore;
    document.getElementById("playerScore").innerHTML = playerScore;
};
var reset = function(){
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("cpuScore").innerHTML = cpuScore;
};