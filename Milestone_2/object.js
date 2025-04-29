/*
object is a collection of key-value pairs
Objects are fundamental building blocks for representing data structures and implementing complex logic. Enhance code organization and readability

*/


//Example
const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };

  person.name = "Alice";
  //Adding new Entity
  person.place = "Mumbai";

  //Display the object values
  for (let key in person) {
    console.log(person[key]);
  }
