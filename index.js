const form = document.querySelector(".contact-form");
const emailInp = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const userEmail = document.querySelector(".user-email");
const signUpPage = document.querySelector(".sign-up-form");
const successPage = document.querySelector(".sign-up-success");
const dismissBtn = document.querySelector(".sign-up-success .btn");
const handleSubmit = (e) => {
  e.preventDefault();
  const target = e.target;

  if (!target) return;

  emailError.textContent = "";

  if (!emailInp.validity.valid || !emailInp.checkValidity()) {
    emailError.textContent = "Valid email required";
    return;
  }
  const formData = new FormData(form);
  const email = formData.get("email");
  userEmail.textContent = email;
  signUpPage.classList.toggle("hide");
  successPage.classList.toggle("hide");
  form.reset()

};

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signUpPage.classList.toggle("hide");
  successPage.classList.toggle("hide");
});
