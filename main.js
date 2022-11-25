let firstCard = 10
let secondCard = 11


let sum = firstCard + secondCard
let hasBlackJack = false


if (sum<21){
    console.log('Do you want tot draw a new card?')
}else if (sum === 21){
    console.log("Wohoo! you've got BlackJAck!")
}else if (sum > 21){
    console.log("you're not out of the game! 😭")
}