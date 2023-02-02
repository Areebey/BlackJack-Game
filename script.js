// Blackjack Game
let firstCard =10;
let secondCard = 5;
let cards=[firstCard,secondCard]
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

    messageEL.textContent=message;
// cardEl.textContent="Cards: "+firstCard+" "+secondCard; this is old one
cardEl.textContent="Cards: "+cards[0]+" "+cards[1];

if(sum <=20){
    message="Do you want to draw a new card";

} else if (sum ===21){
    message=("Yoo ! You are The Blackjack");
    hasBlackJack=true
}else {
   message=("You are out of the game 😭");
   isAlive=false
}
sumEl.textContent="Sum: "+sum;
}

function newCard(){
    let card=6;
    sum +=card;
    cards.push(card);
    console.log(cards)
   
    renderGame(sum);
}
