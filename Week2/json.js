const person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log(person);
const jsonString = JSON.stringify(person);
console.log(jsonString);
JSON.parse(jsonString);
console.log(jsonString);