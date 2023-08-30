let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomItemizer() {
 let ranNum = Math.floor(Math.random() * 3) + 1
 let randomHand = hands[ranNum]
 console.log(randomHand)
 return randomHand
}
randomItemizer()
