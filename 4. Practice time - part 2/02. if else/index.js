let discountType = " "

function discounter() {
 // less than 6 years old -> free
 let age = Math.floor(Math.random() * 67) + 1
 if (age < 6) {
  discountType = "free"
 }
 // 6 to 17 years old     -> child discount
 else if (age > 6 && age < 18) {
  discountType = "child discount"
 }
 // 18 to 26 years old    -> student discount
 else if (age > 17 && age < 26) {
  discountType = "student discount"
 }
 // 27 to 66 years old    -> full price
 else if (age > 26 && age < 67) {
  discountType = "full price"
 }
 // over 66 years old     -> senior citizen discount
 else {
  discountType = "Senior man discount"
 }

 console.log(discountType)
 console.log(age)
}

discounter()
// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
