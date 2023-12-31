let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

function getRandomCard() {
 let randomNumer = Math.floor(Math.random() * 13) + 1
 if (randomNumer > 10) {
  return 10
 } else if (randomNumer === 1) {
  return 11
 } else {
  return randomNumer
 }
}

function startGame() {
 isAlive = true
 // Generate two random numbers
 //What i did
 //  let firstCard = Math.floor(Math.random() * 13) + 1
 //  let secondCard = Math.floor(Math.random() * 13) + 1

 let firstCard = getRandomCard()
 let secondCard = getRandomCard()

 // Re-assign the cards and sum variables so that the game can start
 sum = firstCard + secondCard
 //  cards.push(firstCard, secondCard) instead they just did
 cards = [firstCard, secondCard]

 renderGame()
}

function renderGame() {
 cardsEl.textContent = "Cards: "
 for (let i = 0; i < cards.length; i++) {
  cardsEl.textContent += cards[i] + " "
 }

 sumEl.textContent = "Sum: " + sum
 if (sum <= 20) {
  message = "Do you want to draw a new card?"
 } else if (sum === 21) {
  message = "You've got Blackjack!"
  hasBlackJack = true
 } else {
  message = "You're out of the game!"
  isAlive = false
 }
 messageEl.textContent = message
}

function newCard() {
 let card = getRandomCard()
 sum += card
 cards.push(card)
 renderGame()
}
