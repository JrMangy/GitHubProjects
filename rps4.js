const hand = ["rock","paper","scissors"];
function getHand(){  
    return hand[parseInt(Math.random()*10)%3];
}
var player1 = {
    name : 'Onyx',
    getHand : getHand,
    hand: null,
    score: 0,
}
var player2 = {
    name : 'Topaz',
    getHand : getHand,
    hand: null,
    score: 0,
}
var player3 = {
    name: 'Diamond',
    getHand : getHand,
    hand: null,
    score: 0,
}
var player4 = {
    name: 'Opal',
    getHand : getHand,
    hand : null,
    score: 0,
}
const winCondition = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};
function playRound(p1, p2) {
    p1.hand = p1.getHand(hand);
    p2.hand = p2.getHand(hand);
    console.log(`${p1.name} plays ${p1.hand}, and ${p2.name} plays ${p2.hand}`);
    if (p1.hand == p2.hand){
        console.log("This round is a draw.")
        return null;
    }
    else{
        if (winCondition[p1.hand]==p2.hand){
            console.log(`${p1.name} wins this round.`); 
            return p1;
        }
        else{
            console.log(`${p2.name} wins this round.`);
            return p2;
        }
    }
}
function addWins(p1) {
    if(p1 !== null){
        p1.score++;
    }
}
function playGame(p1, p2, playUntil) {
    while(p1.score < playUntil && p2.score < playUntil) {
        addWins(playRound(p1, p2, hand, winCondition));
        console.log(`${p1.name} Score: ${p1.score}   ${p2.name} Score: ${p2.score}`);
    }
}
playGame(player1, player2, 2)
if(player1.score>player2.score){
    console.log(`${player1.name}, with a score of ${player1.score}, moves on to the Championship!`);
}else{
    console.log(`${player2.name}, with a score of ${player2.score}, moves on the the Championship!`);
};
playGame(player3, player4, 2);
if(player3.score>player4.score){
    console.log(`${player3.name}, with a score of ${player3.score}, moves on to the Championship!`);
}else{
    console.log(`${player4.name}, with a score of ${player4.score}, moves on the the Championship!`);
};
// Bonus code
if (player1.score == 2){
    var newPlayer1 = player1;
}else{
    var newPlayer1 = player2;
}
if (player3.score == 2){
    var newPlayer2 = player3;
}else{
    var newPlayer2 = player4;
}
function playTournament (p1,p2,p3,p4,playUntil){
    p1.score=p2.score=p3.score=p4.score=0;
    playGame(newPlayer1, newPlayer2, 3);
    if (newPlayer1.score>newPlayer2.score){
        console.log(`${newPlayer1.name} is the new RPS World Champion!!!`);
    }else{
        console.log(`${newPlayer2.name} is the new RPS World Champion!!!`);
    }
}
playTournament(player1,player2,player3,player4,3);
