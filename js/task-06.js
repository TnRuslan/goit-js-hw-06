const value = document.querySelector("[data-length='6']");

value.addEventListener("blur", valdationInput);

// const length = Number(value.dataset.length);
// console.log(typeof length);

function valdationInput(event) {
  if (event.currentTarget.value.length === Number(value.dataset.length)) {
    value.classList.add("valid");
    value.classList.remove("invalid");
  } else {
    value.classList.add("invalid");
  }
}
