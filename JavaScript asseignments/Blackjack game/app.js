
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById("msg")
let sumEle= document.getElementById("sum-ele")
let cardEle= document.getElementById("card-ele")

let player={
    name:"Hanin" ,
    chips: "500"

}
let playerEle= document.getElementById("player-ele")
playerEle.textContent = player.name + ":  $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}


function rendergame(){
    cardEle.textContent= "cards: " 
    for (i=0; i<cards.length; i++){
        cardEle.textContent += cards[i] + " "
    }
sumEle.textContent ="Sum : " + sum

if (sum <21){
    message = "Do you want to draw another card?"
}

else if (sum ===21){
    message = "Wohooo! you've got a black jack!"
    hasBlackJack= true
} 
else {
    message="you're out of the game!"
    isAlive=false
}

messageEl.textContent = message

}


function newcard(){
    if (isAlive === true && hasBlackJack === false){

    let card  = getRandomCard() 
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()

    }
}