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
const buttonClose = document.querySelector(".close");
const firstName = document.getElementById("first");
const errorFirstName = document.getElementById("error_firstName");
const lastName = document.getElementById("last");
const errorLastName = document.getElementById("error_lastName");
const email = document.getElementById("email");
const errorEmail = document.getElementById("error_email");
const birthdate = document.getElementById("birthdate");
const errorBirthdate = document.getElementById("error_birthdate");
const numberTournaments = document.getElementById("quantity");
const errorNumberTournaments = document.getElementById("error_quantity");
const nyCity = document.getElementById("location1");
const sfCity = document.getElementById("location2");
const seattleCity = document.getElementById("location3");
const chicagoCity = document.getElementById("location4");
const bostonCity = document.getElementById("location5");
const portlandCity = document.getElementById("location6");
const errorCity = document.getElementById("error_cities");
const focuscgu1 = document.getElementById("checkbox1");
const focuscgu2 = document.getElementById("checkbox2");
const errorCheck = document.getElementById("error_check");
const submitButon = document.getElementById("submitButon");
const form = document.getElementById("form");
const containerForm = document.querySelector('.modal-body');
const boutonClose = document.querySelector('.btn-close')


// Regex

const regexLettres = /^[a-zA-Z-\s]+$/;
const regexMessagerie = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
const regexbirthdate = /^\d{4}-\d{2}-\d{2}$/;

// Launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form

function launchModal() {
  modalbg.style.display = "block";
 
}



// Listener closing form when clicking on the cross

buttonClose.addEventListener("click", closeModal);

// Form closing function when clicking on the cross

function closeModal() {
  modalbg.style.display = "none";
  document.location.reload();
};

// Rest error message

function resetErrorMessage(){
  errorFirstName.textContent = "";
  errorLastName.textContent = "";
  errorEmail.textContent = "";
  errorBirthdate.textContent = "";
  errorNumberTournaments.textContent = "";
  errorCity.textContent = "";
  errorCheck.textContent = "";
} 

// Form input checks

  function validate(e) {
    e.preventDefault();
    resetErrorMessage();
    let isValid = true;

    // Verification the first name is empty or less than 2 characters

    if (!firstName.value || firstName.value.trim().length <= 2 || regexLettres.test(firstName.value) == false) {
    errorFirstName.textContent = "Le prénom doit comporter 2 charactères minimum sans accent et uniquement des lettres."
    errorFirstName.style.fontSize = "12px";
    errorFirstName.style.color = "red";
    isValid = false;
  }

  // Verification the name is empty or less than 2 characters or contains numbers*/

  if (!lastName.value || lastName.value.lenght <= 2 || regexLettres.test(lastName.value) == false){
  errorLastName.textContent = "Le nom doit comporter 2 charactères minimum sans accent et uniquement des lettres."
  errorLastName.style.fontSize = "12px";
  errorLastName.style.color = "red";
  isValid = false;
  }

  // Verification the email is valid or not 
  
  if (!regexMessagerie.test(email.value)) {
    errorEmail.textContent = "L'adresse de messagerie n'est pas valide..."
    errorEmail.style.fontSize = "12px";
    errorEmail.style.color = "red";
    isValid = false;
  }

  // Verification if the birthdate is valid or not

  if (!regexbirthdate.test(birthdate.value)){
    errorBirthdate.textContent = "La date de naissance n'est pas valide.."
    errorBirthdate.style.fontSize = "12px";
    errorBirthdate.style.color = "red";
    isValid = false
  }

  // Check if the number of tournament input is not empty

  if (!numberTournaments.value) {
    errorNumberTournaments.textContent = "Vous devez entrer un nombre dans ce champ..."
    errorNumberTournaments.style.fontSize = "12px";
    errorNumberTournaments.style.color = "red";
    isValid = false;
  }

  // Test if one of the cities is checked otherwise error message

  if (!((nyCity.checked) || (sfCity.checked) || (seattleCity.checked) ||
    (chicagoCity.checked) || (bostonCity.checked) || (portlandCity.checked))) {
    errorCity.textContent = "Vous devez sélectionner une ville";
    errorCity.style.fontSize = "12px";
    errorCity.style.color = "red";
    isValid = false;
  }

  // Check if checked

  if (!focuscgu1.checked) {
    errorCheck.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorCheck.style.fontSize = "12px";
    errorCheck.style.color = "red";
    isValid = false;
  }

  // If is valid true display a thank message

  if (isValid) {
    containerForm.textContent = "Merci, votre formulaire nous a bien été transmis !";
    containerForm.style.fontFamily = "DM Sans";
    containerForm.style.height = "700px";
    containerForm.style.paddingTop = "300px";
    containerForm.style.textAlign = "center";
    boutonClose.style.display = "block";
    boutonClose.addEventListener("click", closeModal);
  }
  return isValid;
}

form.addEventListener("submit", validate);
  // onsubmit="return validate();

