function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeCoolor = document.querySelector(".change-color");
const bgcTextColor = document.querySelector(".color");

btnChangeCoolor.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  bgcTextColor.textContent = `${color}`;
  console.log(color);
}
