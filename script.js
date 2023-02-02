// Blackjack Game
let cards=[]
let sum = 0;
let hasBlackJack=false
let isAlive=false
let message=""

let messageEL=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardEl=document.getElementById("card-el");

let player ={
     name : "John",
     chips : 155
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomNumber(){
    let randomNum=Math.floor(Math.random() * 13) +1
    if(randomNum > 10){
        return 10
    }else if (randomNum === 1){
        return 11
    }else {
    return randomNum
}
}

function startGame(){
    isAlive=true
    let firstCard =getRandomNumber();
    let secondCard = getRandomNumber();
     cards=[firstCard,secondCard]
     sum =firstCard+secondCard;

    renderGame()
}

function renderGame(){

    cardEl.textContent="Cards: " 
for(let i=0; i<cards.length; i++){
    cardEl.textContent += cards[i]+" "
}
sumEl.textContent="Sum: "+sum;
if(sum <=20){
    message="Do you want to draw a new card";

} else if (sum ===21){
    message=("Yoo ! You are The Blackjack");
    hasBlackJack=true
}else {
   message=("You are out of the game 😭");
   isAlive=false
}
messageEL.textContent=message;
}

function newCard(){

if(isAlive===true && hasBlackJack===false){
    let card=getRandomNumber();
    sum +=card;
    cards.push(card);
    // console.log(cards)
    renderGame(sum);
}
}