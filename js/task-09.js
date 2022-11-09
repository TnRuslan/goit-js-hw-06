function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeCoolor = document.querySelector(".change-color");
const bgcTextColor = document.querySelector(".color");

btnChangeCoolor.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  bgcTextColor.textContent = `${getRandomHexColor()}`;
  console.log(getRandomHexColor());
}
