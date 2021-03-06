
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

// Define a variable adam and use object literal notation to assign this variable the value of a JavaScript Object object with no properties.
var adam = {};
// Give adam a name property with the value "Adam".
adam.name = "Adam";
// Add a spouse property to terah and assign it the value of adam.
terah.spouse = adam; 
// Change the value of the terah weight property to 125.
terah.weight = 125;
// Remove the eyeColor property from terah.
delete terah.eyeColor;
// Add a spouse property to adam and assign it the value of terah.
adam.spouse = terah;
// Add a children property to terah and use object literal notation to assign this variable the value of a JavaScript Object object with no properties
terah.children = {};
// Add a carson property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carson".
terah.children.carson = {};
terah.children.carson.name = "Carson";
// Add a carter property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carter".
terah.children.carter = {};
terah.children.carter.name = "Carter";
// Add a colton property to the value of the terah children property and assign it the value of an object with the property name with a value of "Colton".
terah.children.colton = {};
terah.children.colton.name = "Colton";
// Add a children property to adam and assign it the value of terah children.
adam.children = terah.children;



// __________________________________________
// Reflection: Use the reflection guidelines
// 
// This challenge was really helpful to make me solidify the concepts of JavaScript Objects. Now it's more clear to me how to create
// a new object and how to add new properties to it. So, now I can understand the JavaScript syntax basics a lot better than before.
// Also, this challenge wasn't painful at all. The pseudocode provided helped a lot, although I think that I could have made without
// it. However, without it would be even easier. So, maybem that was the point. Besides, that in this way we can also practice how to
// transform a pseudocode into a code.
//


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)