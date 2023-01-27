var money = 40;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money) {
  console.log("I'll have danish");
} else if (butterBread < money) {
  console.log("I'll have butterbread");
} else if (toastBiscuit < money) {
  console.log("I'll have toast biscuit");
} else {
  console.log("I'll just drink water");
}
