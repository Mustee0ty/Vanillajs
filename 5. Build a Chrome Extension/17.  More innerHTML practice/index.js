const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

// MySolution
// container.addEventListener("click", function () {
//  container.innerHTML += "<p>Thanks for buying</p>"
// })

// His Solution
function buy() {
 container.innerHTML += "<p>Thanks for buying</p>"
}
