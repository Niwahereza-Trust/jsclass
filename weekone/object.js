// Creating an empty object


let obj = {};
console.log("Empty object:", obj);

// Creating an object with values



let person = {
    name: "John",
    age: 25
};
console.log("Person object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);



//getting values from an object



let person2 = {
    name: "John",
    age: 25
};
console.log(person.name)
console.log(person[("age")])



//creating object methods

let car = {
  brand: "Toyota",
  start: function() {
    return "Car started!";
  }
};
console.log(car.start());
