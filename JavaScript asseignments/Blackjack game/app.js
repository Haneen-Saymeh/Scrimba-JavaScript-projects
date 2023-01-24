let firstCard=10
let secondCard =5
let sum = firstCard+secondCard+7
let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("msg")
let sumEle= document.querySelector("#sum-ele")

function startgame(){
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

startgame()