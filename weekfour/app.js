// Import the JSON file
const data = require("./data.json");

// Print values from JSON
console.log("Name:", data.name);
console.log("Age:", data.age);
console.log("City:", data.address.city);

// Convert JSON object → JSON string
let jsonString = JSON.stringify(data);
console.log("As JSON string:", jsonString);

// Convert JSON string → JSON object again
let parsed = JSON.parse(jsonString);
console.log("Parsed back to object:", parsed);
