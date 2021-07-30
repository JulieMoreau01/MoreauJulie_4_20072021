/**
 * MOBILE NAV ADD CLASS RESPONSIVE
 */
const iconNav = document.getElementById("icon-nav");

iconNav.addEventListener("click", editNav);

function editNav() {
  let navResponsive = document.getElementById("myTopnav");
  if (navResponsive.className === "topnav") {
    navResponsive.className += " responsive";
  } else {
    navResponsive.className = "topnav";
  }
}



/**
 * CLOSE AND OPEN MODAL
 */
const modalbg = document.querySelector(".bground");
const modalbgSuccess = document.querySelector(".bground-success");
const heroBtn = document.querySelector(".btn-hero");
const closeButtonSucess = document.querySelector(".btn-success");
const modalBtnClose = document.querySelector(".close");
const sucessBtnClose = document.querySelector(".close-success");
const formBlock = document.getElementById("formid");


heroBtn.addEventListener("click", launchModal);
//heroBtn.addEventListener("click", launchSuccess);
modalBtnClose.addEventListener("click", closeModal);
closeButtonSucess.addEventListener("click", closeSuccess);
sucessBtnClose.addEventListener("click", closeSuccess);

function launchModal() {
  modalbg.style.display = "block";
}

function launchSuccess() {
  modalbgSuccess.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
  modalbgSuccess.style.display = "none";
}

function closeSuccess() {
  modalbgSuccess.style.display = "none";
}



/**
   * VALIDATION PRENOM - Non Vide + 2 Caractéres + sans espace + ONLY letters
   * @returns Boolean True or False
   */
let firstInput = document.getElementById("first");
let parentFirstInput = firstInput.parentElement;
let InputFormat = /^[a-zA-Z]*$/; // only letters and not numbers
   
firstInput.addEventListener("change", prenomFunction);
  
function prenomFunction() {
    let firstInputValue = firstInput.value.replace(/ /g, "");
    if ((firstInputValue != "") && (firstInputValue.length >= 2 ) && (firstInputValue.match(InputFormat) )) {
    parentFirstInput.setAttribute("data-error-visible", "false");
    parentFirstInput.setAttribute("data-error", "");
    console.log("true");
    return true;
  } else {
    parentFirstInput.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
    parentFirstInput.setAttribute("data-error-visible", "true");
    console.log("false");
    return false;
  }
};



/**
 * VALIDATION NOM - Not empty + 2 Caractéres + witout space + ONLY letters
 * @returns Boolean True or False
 */
let lastInput = document.getElementById("last");
let parentLastInput = lastInput.parentElement;

lastInput.addEventListener("change", lastFunction);

function lastFunction() {
  let lastInputValue = lastInput.value.replace(/ /g, "");
  if ((lastInputValue != "") && (lastInputValue.length >= 2 ) && (lastInputValue.match(InputFormat))) {
      console.log("true");
      parentLastInput.setAttribute("data-error-visible", "false");
      parentLastInput.setAttribute("data-error", "");
      return true;
    } else {
      parentLastInput.setAttribute("data-error-visible", "true");
      parentLastInput.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
      console.log("false");
      return false;
    }
};



/**
 * VALIDATION EMAIL
 * @returns Boolean True or False
 */
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
    parentEmailInput.setAttribute("data-error", "Adresse Invalide");
    parentEmailInput.setAttribute("data-error-visible", "true");
    console.log("false");
    return false;    
  }
};

//console.log( "email : " + emailFunction());

/**
 * VALIDATION DATE - Not empty and More than 18 years
 * @returns True or False
 */
let birthdateInput = document.getElementById("birthdate");
let parentbirthdateInput = birthdateInput.parentElement;

birthdateInput.addEventListener("change", dateFunction);
birthdateInput.addEventListener("change", CalculAge);

function dateFunction() {
  let calculageNb = CalculAge();
    if ((birthdateInput.value != "") && (calculageNb >= 18)) {
    parentbirthdateInput.setAttribute("data-error-visible", "false");
    parentbirthdateInput.setAttribute("data-error", "");
    console.log("true");
    return true;
  } else {
    parentbirthdateInput.setAttribute("data-error", "Vous n'avez pas 18 ans");
    parentbirthdateInput.setAttribute("data-error-visible", "true");
    console.log("false");
    return false;    
  }
};

/**
 * CALCUL AGE WITH BIRTH DATE
 * @returns age number
 */
function CalculAge() {  
  let today = new Date();
  let dtn = birthdateInput.value; // read date of birth
  
  let an = dtn.substr(0,4); // The years
  let mois = dtn.substr(5,2);// The month
  let day = dtn.substr(8,2); // The day

  let dateNaissance = new Date(an + "-" + mois + "-" + day);
  let age = today.getFullYear() - dateNaissance.getFullYear();
  let m = today.getMonth() - dateNaissance.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
      age = age - 1;
  }
  console.log( "age1: " + age);
  return age;
};


//console.log( "date : " + dateFunction());


/**
 * VALIDATION NUMBER OF PARTICIPATION - Only numbers
 * @returns True or False or 0
 */
let quantityInput = document.getElementById("quantity");
let parentQuantityInput = quantityInput.parentElement;
let quantityFormat = /^[0-9]*$/; // only number and not letters

quantityInput.addEventListener("change", quantityFunction);

function quantityFunction() {
  let quantityValue = quantityInput.value;
  if((quantityValue != "") && (quantityValue != 0) && (quantityValue.match(quantityFormat))) {
    parentQuantityInput.setAttribute("data-error-visible", "false");
    parentQuantityInput.setAttribute("data-error", "");
    console.log("true");
    return true;
  } else if ((quantityValue != "") && (quantityValue.match(quantityFormat)) && (quantityValue == 0) ) {
    console.log("true zero");
    parentQuantityInput.setAttribute("data-error-visible", "false");
    parentQuantityInput.setAttribute("data-error", "");
    return quantityValue;
  } else {
    parentQuantityInput.setAttribute("data-error", "Vous devez entrer un nombre");
    parentQuantityInput.setAttribute("data-error-visible", "true");
    console.log("false");
    return false;    
  }
};



//console.log("return quantityfunction : " + quantityFunction());


/**
 * VALIDATION VILLE - Obligatory if number of participation != 0
 * @returns Boolean True or False
 */
let radioInput1 = document.getElementById("location1");
let radioInput2 = document.getElementById("location2");
let radioInput3 = document.getElementById("location3");
let radioInput4 = document.getElementById("location4");
let radioInput5 = document.getElementById("location5");
let radioInput6 = document.getElementById("location6");

let allRadio = document.getElementById("checkbox");

radioInput1.addEventListener("change", radioButton);
radioInput2.addEventListener("change", radioButton);
radioInput3.addEventListener("change", radioButton);
radioInput4.addEventListener("change", radioButton);
radioInput5.addEventListener("change", radioButton);
radioInput6.addEventListener("change", radioButton);


function radioButton() {
  let quantityZero = quantityFunction();
  //alert(quantityFunction()); 
  if (((radioInput1.checked || radioInput2.checked || radioInput3.checked || radioInput4.checked || radioInput5.checked || radioInput6.checked) == true)) {
    console.log("true");
    allRadio.setAttribute("data-error-visible", "false");
    allRadio.setAttribute("data-error", "");
    return true;
  } else if (quantityZero == 0) {
    console.log("true zero radio");
    allRadio.setAttribute("data-error-visible", "false");
    allRadio.setAttribute("data-error", "");
    return true;
  } else {
    allRadio.setAttribute("data-error-visible", "true");
    allRadio.setAttribute("data-error", "Vous devez choisir une option");
    console.log("false");
    return false;
  }
};

//console.log( "radio : " + radioButton());

/**
 * VALIDATION GENERAL CONDITION
 * @returns Boolean TRUE or False
 */

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
    parentcheckbox1Input.setAttribute("data-error", "Vous devez accepter les termes et conditions");
    console.log("false");
    return false;
  }
};

//console.log( "condition : " + checkboxFunction());


/** Cancel submit and add Success message */
formBlock.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm() == true) {
      theSuccessMessage();
  } 
});


/**
 * FORM VALIDATION
 * @returns Boolean True or False
 */
function validateForm() {
  let checkPrenom = prenomFunction();
  let checkLast = lastFunction();
  let checkEmail = emailFunction();
  let checkDate = dateFunction();
  let checkCheckbox = checkboxFunction();
  let checkQuantity = quantityFunction();
  let checkRadioButton = radioButton();
  if ((checkCheckbox == true) && 
     ((checkQuantity == true) || checkQuantity == 0 ) && 
     (checkRadioButton == true) && 
     (checkEmail == true) && 
     (checkDate == true) && 
     (checkPrenom == true) && 
     (checkLast == true) ) {
    console.log("SUPER GOOD");
    formBlock.style.display = "none";
    modalbg.style.display = "none";
   return true;
  } else {
    console.log("BAD");
    return false;
  }
};


function theSuccessMessage() {
    modalbgSuccess.style.display = "block";
};