document.getElementById("generate-pin").addEventListener("click", function () {
  const randomNUmber = Math.round(Math.random() * 10000);
  const randomNUmberString = randomNUmber + "";

  if (randomNUmberString.length == 3) {
    return randomNUmber;
  } else {
    Math.round(Math.random() * 10000);
  }
  const generatedValue = document.getElementById("generated");
  generatedValue.value = randomNUmber;
});

document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calc = document.getElementById("typed-number");
  if (isNaN(number)) {
    if (number === "C") {
      calc.value = "";
    } else if (number === "<") {
      calc.value--;
    }
  } else {
    const prevCalc = calc.value;
    const newCalc = prevCalc + number;
    calc.value = newCalc;
  }
});

document.getElementById("submit").addEventListener("click", function () {
  const pin = document.getElementById("generated").value;
  const typedNum = document.getElementById("typed-number").value;
  const failError = document.getElementById("feail");
  const success = document.getElementById("success");
  if (pin == typedNum) {
    success.style.display = "block";
    failError.style.display = "none";
  } else {
    failError.style.display = "block";
    success.style.display = "none";
  }
});
