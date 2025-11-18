# 🎮 GameOn — Landing Page Interactive (HTML, CSS, JavaScript)

1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

## En résumé
GameOn est un projet visant à rendre une landing page totalement fonctionnelle grâce à du JavaScript Vanilla.  
L'objectif était d’implémenter toute la logique du formulaire à partir d’un code HTML/CSS existant, en corrigeant les erreurs, en ajoutant les comportements manquants, et en améliorant l'expérience utilisateur.

Ce projet m’a permis de consolider mes bases en JavaScript, notamment sur la validation de formulaires, la gestion des événements, la manipulation du DOM et l’accessibilité.

---

## 🛠️ Issues résolues

### 🔹 1. Ajouter la fonctionnalité de fermeture (X)
- Activation du bouton de fermeture de la modale via JavaScript.
- Gestion correcte de l'état d’ouverture / fermeture.

### 🔹 2. Lier correctement les labels aux inputs
- Correction du HTML (`for` / `id`)
- Amélioration de l’accessibilité et de la navigation clavier.

### 🔹 3. Validation complète du formulaire
Utilisation exclusive de JavaScript Vanilla pour :

- Vérifier chaque champ obligatoire :
  - Prénom : ≥ 2 caractères
  - Nom : ≥ 2 caractères
  - Email : valide
  - Date de naissance : obligatoire
  - Nombre de tournois : valeur numérique
  - Sélection d’une ville : un bouton radio doit être coché
  - Conditions générales : case obligatoire

- Affichage de messages d’erreur spécifiques :  
  - « Veuillez entrer 2 caractères ou plus pour le champ du nom. »  
  - « Vous devez choisir une option. »  
  - « Vous devez vérifier que vous acceptez les termes et conditions. »  
  - etc.

- Conservation des données en cas d’erreur (aucune perte de saisie).

### 🔹 4. Message de confirmation
Après une validation réussie, affichage de :

> **Merci ! Votre réservation a été reçue.**

---

## 🧪 Tests réalisés

- Chrome (dernière version : desktop et mobile)
- Firefox (dernière version : desktop et mobile)

Tests sur :
- comportement des champs valides / invalides
- boutons et interactions
- responsive et cohérence visuelle
- fermeture / ouverture du formulaire
- erreurs d’affichage initiales corrigées

---

## 🛠️ Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **Figma** (maquettes)
- **Git & GitHub**

---

## 📁 Structure du projet

GameOn/
│── index.html
│── css/
│ └── style.css
│── js/
│ └── form.js
└── assets/
├── images/
└── icons/

yaml
Copier le code

---

## 📩 Contact

Pour toute question ou collaboration :

📧 Email : *votre email ici*  
💼 Portfolio : *votre lien ici*

---
