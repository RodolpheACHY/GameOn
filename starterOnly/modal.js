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
const closeBtn = document.querySelector(".close");
const navLink = document.querySelector("#nav");
const form = document.querySelector('form[name="reserve"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const prenomElement = document.getElementById("first");
  const prenom = prenomElement.value;
  const validPrenom = validerPrenom(prenom);
  if (validPrenom === false) {
    setErrorElement(prenomElement);
  } else {
    resetErrorElement(prenomElement);
  }

  const nomElement = document.getElementById("last");
  const nom = nomElement.value;
  const validNom = validerNom(nom);
  if (validNom === false) {
    setErrorElement(nomElement);
  } else {
    resetErrorElement(nomElement);
  }

  const emailElement = document.getElementById("email");
  const email = emailElement.value;
  const validEmail = validerEmail(email);
  if (validEmail === false) {
    setErrorElement(emailElement);
  } else {
    resetErrorElement(emailElement);
  }
  
  const dateNaissanceElement = document.getElementById("birthdate");
  let dateNaiss = new Date(dateNaissanceElement.value);
  const validDateNaiss = validerDateNaiss(dateNaiss);
  if (validDateNaiss === false) {
    setErrorElement(dateNaissanceElement);
  } else {
    resetErrorElement(dateNaissanceElement);
  }

  dateNaiss = new Date(dateNaissanceElement.value);
  const validDateNaiss18 = valider18ans(dateNaiss);
  if (validDateNaiss18 === false) {
    setErrorElement(validDateNaiss18);
  } else {
    resetErrorElement(validDateNaiss18);
  }

  const nbConcoursElement = document.getElementById("quantity");
  const nbConcours = nbConcoursElement.value;
  const validNbConcours = validerNbConcours(nbConcours);
  if (validNbConcours === false) {
    setErrorElement(nbConcoursElement);
  } else {
    resetErrorElement(nbConcoursElement);
  }

 
  const listBtnRadiovilleElement = document.querySelectorAll('input[name="location"]');
  const location = listBtnRadioville[i].value
  const validBtnRadioVille = validerBtnRadioVille(location);
  if (validBtnRadioVille === false) {
    setErrorElement(listBtnRadiovilleElement);
  } else {
    resetErrorElement(listBtnRadiovilleElement);
  }
  
  
});

function setErrorElement(input) {
  const errorEl = input.closest(".formData");
  errorEl.setAttribute("data-error-visible", "true");
}

function resetErrorElement(input) {
  const errorEl = input.closest(".formData");
  errorEl.removeAttribute("data-error-visible");
}

/*function message18AnsElement(input) {
const errorEl = input.closest(".formData");
const tooYoungMessage = errorEl.getAttribute("data-error-too-young");
}*/

navLink.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", () => {
  // Quand on a cliqué sur la croix, on ferme la popup
  closeModal();
});

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} prenom
 * @throws {Error}
 */
function validerPrenom(prenom) {
  if (prenom.length > 2) {
    return true;
  }
    return false;
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom
 * @throws {Error}
 */
function validerNom(nom) {
  if (nom.length > 2) {
    return true;
  }
    return false;
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format.
 * @param {string} email
 * @throws {Error}
 */
function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    return false
  }
    return true;
}

/**
 * Cette fonction prend une date en paramètre et vérifie si le user a plus de 18 ans
 * ici : deux caractères au minimum
 * @param {Date} dateNaiss
 */
function valider18ans(dateNaiss) {
  const maintenant = new Date();
  const ageMinimum = 18;
  let age = maintenant.getFullYear() - dateNaiss.getFullYear();
  const moisDifference = maintenant.getMonth() - dateNaiss.getMonth();
  if (moisDifference < 0 || (moisDifference === 0 && maintenant.getDate() < dateNaiss.getDate())) {
    age--;
  }  
  return age >= ageMinimum;
}

/**
 * Cette fonction prend une date en paramètre et vérifie si la date saisie est valide
 * ici : deux caractères au minimum
 * @param {Date} dateNaiss
 */
function validerDateNaiss(dateNaiss) {
  // Regex pour valider le format JJ/MM/AAAA
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

  if (!dateRegex.test(dateNaiss)) {
      return false; // Format incorrect
  }


  const [jour, mois, annee] = dateNaiss.split('/').map(Number);
  dateNaiss = new Date(annee, mois - 1, jour); // mois - 1 car les mois en JS sont 0-indexés
  // Vérifie que la date est valide (par exemple, pas de 30 février)
  if (dateNaiss.getDate() !== jour || dateNaiss.getMonth() !== mois - 1 || dateNaiss.getFullYear() !== annee) {
      return false; // Date non valide
  }
      return true;
}

/**
 * Cette fonction prend un string en paramètre et valide qu'il est au bon format.
 * @param {string} nbConcours
 */
function validerNbConcours(nbConcours) {
  let quantityRegExp = new RegExp("^\\d+$");
  if (!quantityRegExp.test(nbConcours)) {
    return false;
  }
    return true;
}

/**
 * Cette fonction vérifie qu'au moins une ville a bien été sélectionnée
 *
 * @throws {Error}
 */
function validerBtnRadioVille() {
  let listBtnRadioville = document.querySelectorAll('input[name="location"]');
  let location = "";
  for (let i = 0; i < listBtnRadioville.length; i++) {
    if (listBtnRadioville[i].checked) {
      location = listBtnRadioville[i].value;
      break;
    }
  }

  if (location === "") {
    return false;
  } else {  
    return true;
  }
}

/**
 * Cette fonction vérifie que la case à cocher a bien été cochée pour les conditions d'utilisation
 *
 * @throws {Error}
 */
function validerAccepterConditions() {
  let baliseAccepter = document.getElementById("checkbox1");
  let accepter = baliseAccepter.checked;
  if (!accepter) {
    throw new Error(
      "Merci de bien vouloir accepter les conditions d'utilisation"
    );
  }
  console.log(accepter); // affiche true ou false
}

/**
 * Cette fonction vérifie si la case à cocher a été cochée ou pas être prévenu des futurs événements
 *
 * @throws {Error}
 */
function validerPrchEvenmnt() {
  let balisePrchEvenmnt = document.getElementById("checkbox2");
  let PrchEvenmnt = balisePrchEvenmnt.checked;
  console.log(PrchEvenmnt); // affiche true ou false
}

/**
 * Cette fonction affiche le message d'erreur passé en paramètre.
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs.
 * @param {string} message
 */
function afficherMessageErreur(message) {
  let spanErreurMessage = document.getElementById("erreurMessage");

  if (!spanErreurMessage) {
    // on va ajouter la span dans une div qui a une classe popup
    let popup = document.querySelector(".popup");
    spanErreurMessage = document.createElement("span");
    spanErreurMessage.id = "erreurMessage";
    popup.append(spanErreurMessage);
  }

  spanErreurMessage.innerText = message;
}