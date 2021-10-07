function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');
const $registrationForm = document.querySelector('.registration-form');

// Fonction pour ouvrir et fermer la modal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Dedicated functions to check the form validity

/** Check if the first name lenght is equal or upper than 2 and return a boolean */
function checkFirstName() {
  const firstNameInput = document.getElementById('first').value;
  const $firstErrorMsg = document.querySelector(".firstErrorMsg");
  const isFirstNameValid = firstNameInput.trim().length >= 2;

  if (isFirstNameValid) {
    $firstErrorMsg.classList.add('hidden');
  } else {
    $firstErrorMsg.classList.remove('hidden');
  }
  return isFirstNameValid;
}

/** Check if the last name lenght is equal or upper than 2 and return a boolean */
function checkLastName() {
  const lastNameInput = document.getElementById('last').value;
  const $lastErrorMsg = document.querySelector('.lastErrorMsg');
  const isLastNameValid = lastNameInput.trim().length >= 2;

  if (isLastNameValid) {
    $lastErrorMsg.classList.add('hidden');
  } else {
    $lastErrorMsg.classList.remove('hidden');
  }
  return isLastNameValid;
}

/** Check if the email format is valid and match to the regex and return a boolean */
function checkEmail() {
  const emailInput = document.getElementById('email').value;
  const regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const $emailErrorMsg = document.querySelector('.emailErrorMsg');
  const isEmailValid = regExMail.test(emailInput)

  if (isEmailValid) {
    $emailErrorMsg.classList.add('hidden')
  } else {
    $emailErrorMsg.classList.remove('hidden')
  }
  return isEmailValid
}