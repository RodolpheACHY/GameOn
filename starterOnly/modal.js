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


form.addEventListener("input",  () => {
 
  // Vérification du prénom
  const prenomElement = document.getElementById("first");
  const prenom = prenomElement.value;
  const validPrenom = validerPrenom(prenom);
  if (validPrenom === false) {
    setErrorElement(prenomElement);
  } else {
    resetErrorElement(prenomElement);
  }

  // Vérification du nom
  const nomElement = document.getElementById("last");
  const nom = nomElement.value;
  const validNom = validerNom(nom);
  if (validNom === false) {
    setErrorElement(nomElement);
  } else {
    resetErrorElement(nomElement);
  }

  // Vérification de l'email
  const emailElement = document.getElementById("email");
  const email = emailElement.value;
  const validEmail = validerEmail(email);
  if (validEmail === false) {
    setErrorElement(emailElement);
  } else {
    resetErrorElement(emailElement);
  }
  
  // Vérification si le champ est vide
  const dateNaissanceElement = document.getElementById("birthdate");
  let dateNaiss = new Date(dateNaissanceElement.value);
  const validDateNaissNonVide = validerChampsNonVide(dateNaiss);
  if (validDateNaissNonVide === false) {
    setErrorElement(dateNaissanceElement);
  } else {
    resetErrorElement(dateNaissanceElement);
  }
  
  // Vérification du format de la date de naissance saisie
  /* const validDateNaiss = validerDateNaiss(dateNaiss);
  if (validDateNaiss === false) {
    setErrorElement(dateNaissanceElement);
  } else {
    resetErrorElement(dateNaissanceElement);
  } */

  // Vérification de l'âge du participant
  dateNaiss = new Date(dateNaissanceElement.value);
  const validDateNaiss18 = valider18ans(dateNaiss);
  if (validDateNaiss18 === false) {
    setErrorTooYoungElement(dateNaissanceElement);
  } else {
    resetErrorTooYoungElement(dateNaissanceElement);
  } 

  // Vérification du nombre de concours auxquels le user a déjà participé 
  const nbConcoursElement = document.getElementById("quantity");
  const nbConcours = nbConcoursElement.value;
  const validNbConcours = validerNbConcours(nbConcours);
  if (validNbConcours === false) {
    setErrorElement(nbConcoursElement);
  } else {
    resetErrorElement(nbConcoursElement);
  }

  // Vérification de la ville sélectionnée
  const listBtnRadiovilleElement =  document.getElementById("choixVille"); 
  if (validerBtnRadioVille() === false) {
    setErrorElement(listBtnRadiovilleElement);
  } else {
    resetErrorElement(listBtnRadiovilleElement);
  }
  
  // Vérification de la case à cocher pour confirmer l'acceptation des conditions d'utilisation
  const accepterConditionsElement = document.getElementById("checkbox1");
  if (validerAccepterConditions() === false) {
    setErrorElement(accepterConditionsElement);
  } else {
    resetErrorElement(accepterConditionsElement);
  }

});

form.addEventListener("submit", function (event) {
  event.preventDefault();

   // Initialiser le tableau des erreurs
  const errors = [];
  // Vérification du prénom
  const prenomElement = document.getElementById("first");
  const prenom = prenomElement.value;
  const validPrenom = validerPrenom(prenom);
  if (validPrenom === false) {
    errors.push("Le prénom doit contenir au moins 2 caractères.");
    setErrorElement(prenomElement);
  } else {
    resetErrorElement(prenomElement);
  }

  // Vérification du nom
  const nomElement = document.getElementById("last");
  const nom = nomElement.value;
  const validNom = validerNom(nom);
  if (validNom === false) {
    errors.push("Le nom doit contenir au moins 2 caractères.");
    setErrorElement(nomElement);
  } else {
    resetErrorElement(nomElement);
  }

  // Vérification de l'email
  const emailElement = document.getElementById("email");
  const email = emailElement.value;
  const validEmail = validerEmail(email);
  if (validEmail === false) {
    errors.push("L'email n'est pas valide.");
    setErrorElement(emailElement);
  } else {
    resetErrorElement(emailElement);
  }
  
  // Vérification si le champ est vide
  const dateNaissanceElement = document.getElementById("birthdate");
  let dateNaiss = new Date(dateNaissanceElement.value);
  const validDateNaissNonVide = validerChampsNonVide(dateNaiss);
  if (validDateNaissNonVide === false) {
    errors.push("La date de naissance est obligatoire.");
    setErrorElement(dateNaissanceElement);
  } else {
    resetErrorElement(dateNaissanceElement);
  }
  
  // Vérification du format de la date de naissance saisie
  /* const validDateNaiss = validerDateNaiss(dateNaiss);
  if (validDateNaiss === false) {
    errors.push("La date de naissance n'est pas valide.");
    setErrorElement(dateNaissanceElement);
  } else {
    resetErrorElement(dateNaissanceElement);
  } */

  // Vérification de l'âge du participant
  dateNaiss = new Date(dateNaissanceElement.value);
  const validDateNaiss18 = valider18ans(dateNaiss);
  if (validDateNaiss18 === false) {
    errors.push("Vous devez avoir au moins 18 ans pour participer au concours.");
    setErrorTooYoungElement(dateNaissanceElement);
  } else {
    resetErrorTooYoungElement(dateNaissanceElement);
  } 

  // Vérification du nombre de concours auxquels le user a déjà participé 
  const nbConcoursElement = document.getElementById("quantity");
  const nbConcours = nbConcoursElement.value;
  const validNbConcours = validerNbConcours(nbConcours);
  if (validNbConcours === false) {
    errors.push("Le nombre de concours doit être un nombre entier positif.");
    setErrorElement(nbConcoursElement);
  } else {
    resetErrorElement(nbConcoursElement);
  }

  // Vérification de la ville sélectionnée
  const listBtnRadiovilleElement =  document.getElementById("choixVille"); 
  if (validerBtnRadioVille() === false) {
    errors.push("Vous devez sélectionner une ville.");
    setErrorElement(listBtnRadiovilleElement);
  } else {
    resetErrorElement(listBtnRadiovilleElement);
  }
  
  // Vérification de la case à cocher pour confirmer l'acceptation des conditions d'utilisation
  const accepterConditionsElement = document.getElementById("checkbox1");
  if (validerAccepterConditions() === false) {
    errors.push("Vous devez accepter les conditions d'utilisation.");
    setErrorElement(accepterConditionsElement);
  } else {
    resetErrorElement(accepterConditionsElement);
  }

  // Si le tableau des erreurs n'est pas vide, on affiche les erreurs 
  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    closeModal();  // On ferme la popup
    alert("votre formulaire a été envoyé avec succès !");
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

function setErrorTooYoungElement(input) {
  const errorEl = input.closest(".formData");
  errorEl.setAttribute("data-error-too-young-visible", "true");
}

function resetErrorTooYoungElement(input) {
  const errorEl = input.closest(".formData");
  errorEl.removeAttribute("data-error-too-young-visible");
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
   // Initialiser le tableau des erreurs
  if (prenom.length >= 2) {
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
  if (nom.length >= 2) {
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
 * Cette fonction prend une date en paramètre et vérifie si le champs n'est pas vide
 * @param {Date} dateNaiss
 */
function validerChampsNonVide(dateNaiss) {
  // if (!dateNaiss || dateNaiss === "jj/mm/aaaa" || dateNaiss === "") {
  if (!dateNaiss) {
    return false; // Le champ est vide
  } else {
    return true;
  }
}

/**
 * Cette fonction prend une date en paramètre et vérifie si le user a plus de 18 ans
 * ici : deux caractères au minimum
 * @param {Date} dateNaiss
 */
function valider18ans(dateNaiss) {
  const maintenant = new Date();
  const ageMinimum = 18;
  const date = new Date(dateNaiss);
  //let dateNaissFormated = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  //console.log(dateNaissFormated);
  let age = maintenant.getFullYear() - date.getFullYear();
  const moisDifference = maintenant.getMonth() - date.getMonth();
  if (moisDifference < 0 || (moisDifference === 0 && maintenant.getDate() < date.getDate())) {
    age--; // On n'a pas encore atteint l'anniversaire
  }  
  return age >= ageMinimum;
}

/**
 * Cette fonction prend une date en paramètre et vérifie si la date saisie est valide
 * ici : deux caractères au minimum
 * @param {Date} dateNaiss
 */

/*function validerDateNaiss(dateNaiss) {
  //const date = new Date(dateNaiss);
  //let dateNaissFormated = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  // Regex pour valider le format JJ/MM/AAAA
   const dateRegex = new RegExp("^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$");
  if (!dateRegex.test(date)) {
      return false; // Format incorrect
  }

  const [jour, mois, annee] = dateNaiss.split('/').map(Number);
  date = new Date(annee, mois - 1, jour); // mois - 1 car les mois en JS sont 0-indexés
  // Vérifie que la date est valide (par exemple, pas de 30 février)
  if (dateNaiss.getDate() !== jour || dateNaiss.getMonth() !== mois - 1 || dateNaiss.getFullYear() !== annee) {
      return false; // Date non valide
  }
      return true;
} */

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
      return false;
    } else {  
      return true;
    }
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
