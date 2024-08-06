let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");
let icon = document.getElementsByTagName('i');
let span = document.getElementsByTagName('span');
let inp = document.getElementsByTagName('input');

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add("fa-check");
  nameError.previousElementSibling.style.color = "#74e672";
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }

  if (!email.match(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm)) {
    emailError.innerHTML = "Enter Valid Email";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add("fa-check");
  emailError.previousElementSibling.style.color = "#74e672";
  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length == 0) {
    passwordError.innerHTML = "Password is Required";
    return false;
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passwordError.innerHTML = "Enter Valid Password";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  passwordError.innerHTML = "";
  passwordError.previousElementSibling.classList.add("fa-check");
  passwordError.previousElementSibling.style.color = "#74e672";
  return true;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateName() && validateEmail() && validatePassword()) {
    alert("form submitted Successfully");

    for(let i = 0;i<icon.length;i++){
        icon[i].classList = " ";
        span[i].innerHTML = "";
        inp[i].value = "";
    }
  }
});
