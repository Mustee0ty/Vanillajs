let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

gun = "pistol"

//The below code worked when i tried it

// welcomeEl.innerText = name + " " + greeting + gun

// But this is how he did it

// welcomeEl.innerText = welcomeEl.innerText + " " + gun

// This is the samething as the above code
welcomeEl.innerText += " " + gun
