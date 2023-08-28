// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
// console.log(countEl)
let count = 0

function increment() {
 count = count + 1
 // set countEl's innerText to the count
 console.log(count)
 countEl.innerText = count
}
