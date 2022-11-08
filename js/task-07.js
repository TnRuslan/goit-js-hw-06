const fontSiszeValue = document.querySelector("#font-size-control");
const textForChange = document.querySelector("#text");

fontSiszeValue.addEventListener("change", changeFontSize);

function changeFontSize() {
  textForChange.style.fontSize = `${fontSiszeValue.value}px`;
}
