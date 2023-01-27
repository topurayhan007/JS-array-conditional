var fruits = ["Apple", "Banana", "Orange"];

// Index of Banana
console.log("Index of banana is: " + fruits.indexOf("Banana"));

// Replace Banana with Mango
fruits[1] = "Mango";
console.log("After replacing 'Banana' with 'Mango': " + fruits);

// Remove Orange
fruits.pop();
console.log("After removing 'Banana': " + fruits);

// Add 'Watermelon'
fruits.push("Watermelon");
console.log("After adding 'Watermelon': " + fruits);
