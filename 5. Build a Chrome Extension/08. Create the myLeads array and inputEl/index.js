// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []
let inputField = document.getElementById("input-el")
let inputEl = inputField.textContent
inputEl = "something"
console.log(inputEl)

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
 console.log("Button clicked!")
})
