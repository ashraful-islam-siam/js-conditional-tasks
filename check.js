let score = 101;

if (score >= 100 && score >= 90) {
  if (score > 100) {
    console.log("You entered a wrong valid number");
  } else {
    console.log("A");
  }
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
