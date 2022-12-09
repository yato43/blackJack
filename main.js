let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isALive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = ('Do you want to draw a new card?')
    } else if (sum === 21) {
        message = ("Wohoo! you've got BlackJAck!")
        hasBlackJack = true
    } else if (sum > 21) {
        message = ("you're out of the ыва! ")
        isALive = false
    }
    messageEl.textContent = message
}


