// 1. Three numbers 13, 79, 45 print largest number using if-else
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the  largest number");
} else if (num3 > num1 && num3 > num2) {
  console.log(num3 + " is the largest number");
}

// 2. Triangle has sides 9, 8, 9. Find if it is Isosceles or not.
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("The triangle is Isosceles");
} else {
  console.log("The triangle is not Isosceles");
}
