var destinations = ["sajek", "coxsbazar", "nepal", "bali", "singapore"];
// index starts from 0

console.log(destinations[2]);
destinations[2] = "thailand";
var index = destinations.indexOf("bali");

destinations.push("bhutan");
destinations.pop();

// Conditionals
// <, >, ==, !=, <=, >=
// &&, ||
if (destinations[1] === "sajek") {
} else if (destinations[2] === "bali") {
} else if (destinations.length !== 3) {
} else {
}
