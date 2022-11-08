// const counter = {
//   value: 0,

//   incrementValue() {
//     this.value += 1;
//   },

//   decrementValue() {
//     this.value -= 1;
//   },
// };

// const valueEl = document.querySelector("#value");
// const buttonIncrement = document.querySelector("[data-action='increment']");
// const buttonDecrement = document.querySelector("[data-action='decrement']");

// buttonIncrement.addEventListener("click", function () {
//   counter.incrementValue();
//   valueEl.textContent = counter.value;
// });

// buttonDecrement.addEventListener("click", function () {
//   counter.decrementValue();
//   valueEl.textContent = counter.value;
// });

let counterValue = 0;

const valueEl = document.querySelector("#value");
const buttonIncrement = document.querySelector("[data-action='increment']");
const buttonDecrement = document.querySelector("[data-action='decrement']");

function incrementValue() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decrementValue() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

buttonIncrement.addEventListener("click", incrementValue);
buttonDecrement.addEventListener("click", decrementValue);
