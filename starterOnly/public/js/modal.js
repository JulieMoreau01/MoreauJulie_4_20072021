/** FONCTION OUVERTURE FERMETURE DE LA NAV EN VERSION TELEPHONE */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



/** OUVERTURE FERMETURE DE LA POP UP */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

// close event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}



/** VALIDATION PRENOM */
let firstInput = document.getElementById("first");
let parentFirstInput = firstInput.parentElement;

firstInput.addEventListener("change", prenomFunction);

  function prenomFunction() {
      if ((firstInput.value != "") && (firstInput.value.length >= 2 )) {
      parentFirstInput.setAttribute("data-error-visible", "false");
      parentFirstInput.setAttribute("data-error", "");
      console.log("true");
      return true;
    } else {
      parentFirstInput.setAttribute("data-error", "2 caractéres minimum");
      parentFirstInput.setAttribute("data-error-visible", "true");
      console.log("false");
      return false;
    }
  };



/** VALIDATION NOM */
let lastInput = document.getElementById("last");
let parentLastInput = lastInput.parentElement;

lastInput.addEventListener("change", lastFunction);

function lastFunction() {
  if ((lastInput.value != "") && (lastInput.value.length >= 2 )) {
      console.log("true");
      parentLastInput.setAttribute("data-error-visible", "false");
      parentLastInput.setAttribute("data-error", "");
      return true;
    } else {
      parentLastInput.setAttribute("data-error-visible", "true");
      parentLastInput.setAttribute("data-error", "Au moins 2 caractere");
      console.log("false");
      return false;
    }
};



/** VALIDATION EMAIL */
let emailInput = document.getElementById("email");
let parentEmailInput = emailInput.parentElement;
let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

emailInput.addEventListener("change", emailFunction);

function emailFunction() {
  if(emailInput.value.match(mailFormat)) {
    parentEmailInput.setAttribute("data-error-visible", "false");
    parentEmailInput.setAttribute("data-error", "");
    console.log("true");
    return true;
  } else {
    parentEmailInput.setAttribute("data-error", "Invalide");
    parentEmailInput.setAttribute("data-error-visible", "true");
    console.log("false");
    return false;    
  }
};

//console.log( "email : " + emailFunction());

/** VALIDATION DATE */
let birthdateInput = document.getElementById("birthdate");
let parentbirthdateInput = birthdateInput.parentElement;
//let birthdateFormat = /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;


birthdateInput.addEventListener("change", dateFunction);

function dateFunction() {
  //if(birthdateInput.value.match(birthdateFormat)) {
    if (birthdateInput.value != "") {
    parentbirthdateInput.setAttribute("data-error-visible", "false");
    parentbirthdateInput.setAttribute("data-error", "");
    console.log("true");
    return true;
  } else {
    parentbirthdateInput.setAttribute("data-error", "Invalide");
    parentbirthdateInput.setAttribute("data-error-visible", "true");
    console.log("false");
    return false;    
  }
};

//console.log( "date : " + dateFunction());


/**VALIDATION QUANTITY */
let quantityInput = document.getElementById("quantity");
let parentQuantityInput = quantityInput.parentElement;
let QuantityFormat = /^[0-9]*$/; // only number and not letters

quantityInput.addEventListener("change", quantity);

function quantity() {
  if((quantityInput.value != "") && (quantityInput.value.match(QuantityFormat))) {
    parentQuantityInput.setAttribute("data-error-visible", "false");
    parentQuantityInput.setAttribute("data-error", "");
    console.log("true");
    return true;
  } else {
    parentQuantityInput.setAttribute("data-error", "Invalide");
    parentQuantityInput.setAttribute("data-error-visible", "true");
    console.log("false");
    return false;    
  }
};

//console.log( "quantity : " + quantity());

/** VALIDATION RADIO BOUTON */
const radioInput1 = document.getElementById("location1");
const radioInput2 = document.getElementById("location2");
const radioInput3 = document.getElementById("location3");
const radioInput4 = document.getElementById("location4");
const radioInput5 = document.getElementById("location5");
const radioInput6 = document.getElementById("location6");

const allRadio = document.getElementById("checkbox");

radioInput1.addEventListener("change", radioButton);
radioInput2.addEventListener("change", radioButton);
radioInput3.addEventListener("change", radioButton);
radioInput4.addEventListener("change", radioButton);
radioInput5.addEventListener("change", radioButton);
radioInput6.addEventListener("change", radioButton);


function radioButton() {
  if ((radioInput1.checked || radioInput2.checked || radioInput3.checked || radioInput4.checked || radioInput5.checked || radioInput6.checked) == true) {
    console.log("true");
    allRadio.setAttribute("data-error-visible", "false");
    allRadio.setAttribute("data-error", "");
    return true;
  } else {
    allRadio.setAttribute("data-error-visible", "true");
    allRadio.setAttribute("data-error", "Obligatoire");
    console.log("false");
    return false;
  }
};

//console.log( "radio : " + radioButton());

/** VALIDATION CONDITION */

let conditionCheckbox = document.getElementById("checkbox1");
let parentcheckbox1Input = conditionCheckbox.parentElement;

conditionCheckbox.addEventListener("change", checkboxFunction);

function checkboxFunction() {
  if (conditionCheckbox.checked === true) {
    parentcheckbox1Input.setAttribute("data-error-visible", "false");
    parentcheckbox1Input.setAttribute("data-error", "");
    console.log("true");
    return true;
  } else {
    parentcheckbox1Input.setAttribute("data-error-visible", "true");
    parentcheckbox1Input.setAttribute("data-error", "Obligatoire");
    console.log("false");
    return false;
  }
};

//console.log( "condition : " + checkboxFunction());

/** VALIDATION FORMULAIRE */

function validateForm() {
  checkPrenom = prenomFunction();
  checkLast = lastFunction();
  checkEmail = emailFunction();
  checkDate = dateFunction();
  checkCheckbox = checkboxFunction();
  checkQuantity = quantity();
  checkRadioButton = radioButton();
  if ((checkCheckbox == true) && (checkQuantity == true) && (checkRadioButton == true) && (checkEmail == true) && (checkDate == true) ) {
    success();
    return false;
  } else {
    return false;
  }
};


function success() {
  validationSuccess = document.getElementById("successmessage");
  validationSuccess.innerHTML = "<p>Thank you for submitting your registration details</p><p><input class='btn-submit' type='button' value='Close' id='submitButtonClose'/></p>";
  validationSuccess.classList.add("successmessageclass");
  submitButton = document.getElementById("submitButtonClose");
  submitButton.addEventListener("click", closeModal);
};