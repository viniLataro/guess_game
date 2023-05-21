// variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let attemptCount = 1;

// events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "enter") {
    handleResetClick();
  }
});

// callback function
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    document.querySelector(
      ".screen2 h2"
    ).innerText = `Got it right in ${attemptCount} tries`;

    console.log(`acertou em ${attemptCount} tentativas`);
  }

  inputNumber.value = "";
  attemptCount++;
}

function handleResetClick(event) {
  toggleScreen();
  attemptCount = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
