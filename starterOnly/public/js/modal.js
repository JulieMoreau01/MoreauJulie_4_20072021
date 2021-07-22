// FONCTION OUVERTURE FERMETURE DE LA NAV EN VERSION TELEPHONE
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
const modalBtnClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const error = document.getElementsByClassName("error");
const radioInput1 = document.getElementById("location1");
const radioInput2 = document.getElementById("location2");
const radioInput3 = document.getElementById("location3");
const radioInput4 = document.getElementById("location4");
const radioInput5 = document.getElementById("location5");
const radioInput6 = document.getElementById("location6");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Fonction de validation du formulaire
function validateForm() {
    if (firstInput.value.length < 3 ) {
      document.getElementById("error-first").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      return false;
    } else if (lastInput.value.length < 3 ) {
      document.getElementById("error-last").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      return false;
    } else if ((radioInput1.checked || radioInput2.checked || radioInput3.checked || radioInput4.checked || radioInput5.checked || radioInput6.checked) == false) {
      document.getElementById("error-radio").innerText = "Une ville est obligatoire";
      return false;
    } else {
      document.getElementsByTagName("main").innerText = "Thank you for submitting your registration details";
      return true;
    }
};