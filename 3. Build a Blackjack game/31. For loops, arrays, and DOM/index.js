let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (paragraph = 0; paragraph < sentence.length; paragraph += 1) {
 console.log(sentence[paragraph])
 greetingEl.textContent += sentence[paragraph] + " "
}

// Using for each to push spaces
let sentenceWithSpace = []
sentence.forEach((str) => {
 sentenceWithSpace.push(str + " ")
})
console.log(sentenceWithSpace)

// Using map to add spaces
let sentenceWithSpacePop = sentence.map((str) => str + " ")
console.log(sentenceWithSpacePop)
