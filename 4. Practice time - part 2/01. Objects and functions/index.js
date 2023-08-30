// Create a person object that contains three keys: name, age, and county.
let person = {
 name: "Tyrant",
 age: 25,
 country: "Nigeria",
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
function logData() {
 let description =
  person.name +
  " " +
  "is" +
  " " +
  person.age +
  " " +
  "years" +
  " " +
  "old" +
  " " +
  "and" +
  " " +
  "lives" +
  " " +
  person.country
 console.log(description)
}
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
logData()
