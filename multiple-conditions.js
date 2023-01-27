var isGraduated = true;
var salary = 75000;
var cars = 1;

// if (isGraduated == true) {
//   console.log("Lets get married");
// } else {
//   console.log("You're never getting married");
// }

// conditions using AND
if (isGraduated == true && salary > 50000 && cars >= 1) {
  console.log("Lets get married");
} else {
  console.log("You're never getting married");
}

var isGraduated = false;
var salary = 61000;
var cars = 0;

// conditions using OR
if (isGraduated == true || salary > 50000 || cars >= 1) {
  console.log("Lets get married");
} else {
  console.log("You're never getting married");
}

if ((isGraduated == true && salary > 50000) || cars >= 1) {
  console.log("Lets get married");
}
