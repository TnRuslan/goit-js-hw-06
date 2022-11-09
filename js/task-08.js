const form = document.querySelector(".login-form");

const userName = {};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("Всі поля мають бути заповнені");
  } else {
    userName.email = formElements.email.value;
    userName.password = formElements.password.value;
  }

  form.reset();
  console.log(userName);
}
