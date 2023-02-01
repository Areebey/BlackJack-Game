// Blackjack Game
let firstCard =10;
let secondCard = 5;
let sum = firstCard+secondCard;
let hasBlackJack=false
let isAlive=true
let message=""

let messageEL=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardEl=document.getElementById("card-el");

function startGame(){
    renderGame()
}

function renderGame(){
if(sum <=20){
    message="Do you want to draw a new caed";

} else if (sum ===21){
    message=("Yoo ! You are The Blackjack");
    hasBlackJack=true
}else {
   message=("You are out of the game 😭");
   isAlive=false
}
messageEL.textContent=message;
cardEl.textContent="Cards: "+firstCard+" "+secondCard;
sumEl.textContent="Sum: "+sum;
}

function newCard(){
    let card=6;
    sum +=card;
   
    renderGame(sum);
}
