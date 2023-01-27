var numbers = [78, 45, 98, 45];
// use push to add an element to an array as the last element of the array
numbers.push(63);
console.log(numbers);

var friends = ["balam", "kalam", "salam"];
friends.push("gelam");
friends.push("pailam");
console.log(friends);

// use pop to get last element of the array
console.log(numbers);
numbers.pop();
console.log(numbers);
var element = numbers.pop();
console.log(numbers);
console.log(element);

// to push an element at the beginning of an array use "unshift" function
friends.unshift("jabbar");
console.log(friends);

// to pop an element at the beginning of an array use "shift" function
friends.shift();
console.log(friends);
