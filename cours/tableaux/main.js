let prenoms = ["Heddi", "Alexis", "Nicolas"];
console.log(prenoms);

prenoms.push("Marion");
console.log(prenoms);

prenoms.splice(0, 1); // Suppression de "Heddi"
prenoms.splice(1, 1); // Suppression de "Nicolas" car le tableau a changé
console.log(prenoms);

// Alexis et Marion

prenoms.splice(1, 0, "Jean"); // A partir de l'index 1, on supprime 0 et on ajoute Jean
console.log(prenoms);