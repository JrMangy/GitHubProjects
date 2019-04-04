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

const winCondition = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

function playRound(player1, player2, hand, winCondition) {
    player1.hand = player1.getHand(hand);
    player2.hand = player2.getHand(hand);
    console.log(`${player1.name} plays ${player1.hand}, and ${player2.name} plays ${player2.hand}`);
    
    if (player1.hand == player2.hand){
        console.log("This round is a draw.")
        return null;
    }
    else{
        if (winCondition[player1.hand]==player2.hand){
            console.log(`${player1.name} wins this round.`); 
            return player1;
        }
        else{
            console.log(`${player2.name} wins this round.`);
            return player2;
        }
    }
}
function addWins(player) {
    if(player !== null){
        player.score++;
    }
}


function playGame(player1, player2, hand, winCondition, playUntil) {
    console.log(`Play until ${playUntil} games won. Start!!!`);
    while(player1.score < playUntil && player2.score < playUntil) {
        addWins(playRound(player1, player2, hand, winCondition));
        console.log(`${player1.name} Score: ${player1.score}   ${player2.name} Score: ${player2.score}`)
    }
}


playGame(player1, player2, hand, winCondition, 5);
    if(player1.score>player2.score){
        console.log(`${player1.name}, with a score of ${player1.score} is the RPS Champion!!!`);
    }else{
    console.log(`${player2.name}, with a score of ${player2.score} is the RPS Champion!!!`);
};
console.log(player1.name+" : "+player1.score);
console.log(player2.name+" : "+player2.score);
