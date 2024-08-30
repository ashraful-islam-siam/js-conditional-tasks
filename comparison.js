var money = 30;

if (money >= 40) {
  console.log("I dont need money. I have the money that I need");
} else {
  console.log("I haven't money. Gimme money");
}

var isCoding = false;
let isExam = true;

// if (isExam == true) {
//   console.log("I need to study.");
// } else {
//   console.log("Just chill! What we have in life");
// }

if (isCoding == true && isExam == true) {
  console.log("Daily 3 bela porte hobe ebong coding korte hobe");
} else if (isCoding == true || isExam == true) {
  let whatToDo;
  if (isCoding) {
    whatToDo = "Let's learn about coding and do the exercises";
  } else if (isExam) {
    whatToDo = "Samne exam bepak porte hobe";
  } else {
    whatToDo = "Rater ghum mair diya porte hbe and code korte hbe";
  }

  console.log(whatToDo);
}

let taka = 10;

if (taka >= 30) {
  console.log("Puri, peyaju and cha khabo");
} else if (taka >= 15) {
  console.log("Peyaju khamu duita ar ek cup cha");
} else if (taka < 15) {
  console.log("Only cha is available");
}

let str = "";

console.log(str == true);
