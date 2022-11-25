let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackJack = false
let isALive = true
let message = ""

function startGame() {
    if (sum<21){
        message = ('Do you want tot draw a new card?')
    }else if (sum === 21){
        message = ("Wohoo! you've got BlackJAck!")
        hasBlackJack = true
    }else if (sum > 21){
        message = ("you're not out of the game! 😭")
        isALive = false
    }
    console.log(message)
}


