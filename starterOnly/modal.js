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
const modalConfirm = document.getElementById("confirmationModal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtns = document.querySelectorAll(".js-close");
const navLink = document.querySelector("#nav");
const form = document.querySelector('form[name="reserve"]');

// ajout d'un écouteur d'évènement "submit" sur le formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Initialisation du tableau des erreurs
  const errors = [];

  // vérification du prénom
  const prenomElement = document.getElementById("first");
  const prenom = prenomElement.value;
  const validPrenom = validerPrenom(prenom);
  if (validPrenom === false) {
    errors.push({
      fieldName: "prénom",
      message: "Le prénom doit contenir au moins 2 caractères.",
    });
    setErrorElement(prenomElement);
  } else {
    resetErrorElement(prenomElement);
  }

  // vérification du nom
  const nomElement = document.getElementById("last");
  const nom = nomElement.value;
  const validNom = validerNom(nom);
  if (validNom === false) {
    errors.push({
      fieldName: "nom",
      message: "Le nom doit contenir au moins 2 caractères.",
    });
    setErrorElement(nomElement);
  } else {
    resetErrorElement(nomElement);
  }

  // vérification de l'email
  const emailElement = document.getElementById("email");
  const email = emailElement.value;
  const validEmail = validerEmail(email);
  if (validEmail === false) {
    errors.push({ fieldName: "email", message: "L'email n'est pas valide." });
    setErrorElement(emailElement);
  } else {
    resetErrorElement(emailElement);
  }

  // vérification de champ date de naisance non vide & âge du participant supérieur à 18 ans
  const dateNaissanceElement = document.getElementById("birthdate");
  dateNaiss = new Date(dateNaissanceElement.value);
  const validDateNaiss18 = valider18ans(dateNaiss);

  if (dateNaissanceElement.value === "") {
    errors.push({
      fieldName: "date de naissance",
      message: "La date de naissance est obligatoire.",
    });
    dateNaissanceElement.closest(".formData").dataset.error =
      "La date de naissance est obligatoire.";
    setErrorElement(dateNaissanceElement);
  } else if (validDateNaiss18 === false) {
    errors.push({
      fieldName: "âge minimum",
      message: "Vous devez avoir au moins 18 ans pour participer au concours.",
    });
    dateNaissanceElement.closest(".formData").dataset.error =
      "Vous devez avoir au moins 18 ans pour participer au concours.";
    setErrorElement(dateNaissanceElement);
  } else {
    resetErrorElement(dateNaissanceElement);
  }

  // vérification du nombre de concours auxquels le user a déjà participé saisi par l'utilisateur
  const nbConcoursElement = document.getElementById("quantity");
  const nbConcours = nbConcoursElement.value;
  const validNbConcours = validerNbConcours(nbConcours);
  if (validNbConcours === false) {
    errors.push({
      fieldName: "nombre de concours",
      message: "Le nombre de concours doit être un nombre entier positif.",
    });
    setErrorElement(nbConcoursElement);
  } else {
    resetErrorElement(nbConcoursElement);
  }

  // vérification des boutons radios pour s'assurer de la sélection d'une ville
  const listBtnRadiovilleElement = document.getElementById("choixVille");
  if (validerBtnRadioVille() === false) {
    errors.push({
      fieldName: "ville",
      message: "Vous devez sélectionner une ville.",
    });
    setErrorElement(listBtnRadiovilleElement);
  } else {
    resetErrorElement(listBtnRadiovilleElement);
  }

  // vérification de la case à cocher pour confirmer l'acceptation des conditions d'utilisation
  const accepterConditionsElement = document.getElementById("checkbox1");
  if (validerAccepterConditions() === false) {
    errors.push({
      fieldName: "conditions d'utilisation",
      message: "Vous devez accepter les conditions d'utilisation.",
    });
    setErrorElement(accepterConditionsElement);
  } else {
    resetErrorElement(accepterConditionsElement);
  }

  // vérifie si le tableau d'erreurs est vide
  if (errors.length > 0) {
    let errorMessage = "";
    errors.forEach((error) => {
      errorMessage += `${error.fieldName} : ${error.message}\n`;
    });
    return false;
  } else {
    // afficher le message de confirmation
    form.reset(); // On réinitialise le formulaire
    const formModal = document.getElementById("formModal");
    formModal.style.display = "none";
    modalConfirm.style.display = "block";
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

navLink.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal formConfirm
function launchModalConfirm() {
  modalConfirm.style.display = "block";
}

// close modal event
closeBtns.forEach((b) =>
  b.addEventListener("click", () => {
    // Quand on a cliqué sur la croix, on ferme la popup
    closeModal();
  })
);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalConfirm.style.display = "none";
}


/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} prenom
 */
function validerPrenom(prenom) {
  if (prenom.length >= 2) {
    return true;
  }
  return false;
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom
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
 */
function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    return false;
  }
  return true;
}

/**
 * Cette fonction prend une date en paramètre et vérifie si le champs n'est pas vide
 * @param {Date} dateNaiss
 */
function validerChampsNonVide(dateNaiss) {
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
  let age = maintenant.getFullYear() - date.getFullYear();
  const moisDifference = maintenant.getMonth() - date.getMonth();
  if (
    moisDifference < 0 ||
    (moisDifference === 0 && maintenant.getDate() < date.getDate())
  ) {
    age--; // On n'a pas encore atteint l'anniversaire
  }
  return age >= ageMinimum;
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


 // fonction qui vérifie les boutons radios afin de s'assurer qu'une ville a bien été sélectionnée
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

// fonction qui vérifie que la case à cocher a bien été cochée pour les conditions d'utilisation
function validerAccepterConditions() {
  let baliseAccepter = document.getElementById("checkbox1");
  let accepter = baliseAccepter.checked;
  if (!accepter) {
    return false;
  } else {
    return true;
  }
}

// Cette fonction vérifie si la case à cocher pour les événements à venir a été cochée ou pas 
function validerPrchEvenmnt() {
  let balisePrchEvenmnt = document.getElementById("checkbox2");
  let PrchEvenmnt = balisePrchEvenmnt.checked;
  console.log(PrchEvenmnt); // affiche true ou false dans la console mais pourrait déclencher l'envoi d'un mail dans une version plus évoluée du projet
}
