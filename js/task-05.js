const inputValue = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputValue.addEventListener("input", onInputalue);

function onInputalue(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value !== "") {
    outputName.textContent = event.currentTarget.value;
  } else {
    outputName.textContent = "Anonymous";
  }
}
