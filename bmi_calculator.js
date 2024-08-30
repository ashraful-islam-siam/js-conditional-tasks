var weight = 45;
var height = 1.2;
var BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 24.9) {
  console.log("Your are overweight");
} else {
  console.log("You are obese");
}

console.log(BMI);
