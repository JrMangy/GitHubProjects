var win 
var score1=0;
var score2=0;
var weapons = ["rock", "paper", "scissors"];

while (score1 <= 2&score2 <= 2){
   var p1 = weapons[parseInt(Math.random()*10)%3];
   var p2 = weapons[parseInt(Math.random()*10)%3];
   console.log("Player 1 chose "+p1);
   console.log("Player 2 chose "+p2);

   if (p1 === "rock") {
       if (p2 === "rock"){
           console.log("Its a draw");
       }else if (p2 === "paper"){
           console.log("Player 2 wins this round");
           score2++;
       }else{
           console.log("Player 1 wins this round");
           score1++;
       }
   }
   else if (p1 === "scissors") {
       if (p2 === "scissors"){
           console.log("Its a draw");
       }else if (p2 === "rock"){
           console.log("Player 2 wins this round");
           score2++;
       }else{
           console.log("Player 1 wins this round");
           score1++;
       }
   }
   else {
       if (p2 === "paper"){
           console.log("Its a draw");
       }else if (p2 === "scissors"){
           console.log("Player 2 wins this round");
           score2++;
       }else{
           console.log("Player 1 wins this round");
           score1++;
       }
   }
}
if (score1>score2){
   console.log("Player 1 is the RPS Champion!");
}else{
   console.log("Player 2 is the RPS Champion!");
}
