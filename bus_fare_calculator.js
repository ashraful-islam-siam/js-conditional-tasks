var age = 16;
var ticket = 500;
if (age < 10) {
  console.log("You are baby. Your ticket is free");
} else if (age > 14) {
  var discount = (ticket * 50) / 100;
  console.log(discount, "for you");
} else if (age >= 60) {
  var discount = (ticket * 15) / 100;
  console.log(discount, "for you");
} else {
  console.log(ticket);
}
