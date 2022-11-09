function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", createBox);
destroyButton.addEventListener("click", destroyBox);
input.addEventListener("change", onInputValue);
input.addEventListener("focus", destroyBox);

let inputValue = 0;

function onInputValue(event) {
  console.log(event.currentTarget.value);
  inputValue = event.currentTarget.value;
}

function createBox() {
  const allBoxes = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < inputValue; i += 1) {
    const box = `<div style='width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}; margin-bottom: 20px'></div>`;

    allBoxes.push(box);
    width += 10;
    height += 10;
  }

  boxes.insertAdjacentHTML("afterbegin", allBoxes.join(""));
}

function destroyBox() {
  boxes.innerHTML = "";
  input.value = "";
}
