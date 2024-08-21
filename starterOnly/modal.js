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
 * Cette fonction prend un string en paramètre et valide qu'il est au bon format.
 * @param {string} nbConcours
 * @throws {Error}
 */
function validerNbConcours(nbConcours) {
  if (Number.isNaN(nbConcours)) {
    return true;
  }
    return false;
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
    if (location === "") {
      throw new Error("Veuillez choisir une ville");
    }
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