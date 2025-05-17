// script.js

// Sélectionner les éléments nécessaires
const cards = document.querySelectorAll(".card-body");
const totalPriceSpan = document.querySelector(".total");

function updateTotalPrice() {
  let total = 0;
  cards.forEach(cardBody => {
    const quantitySpan = cardBody.querySelector(".quantity");
    const unitPriceElem = cardBody.querySelector(".unit-price");
    if (quantitySpan && unitPriceElem) {
      const quantity = parseInt(quantitySpan.textContent);
      const unitPrice = parseFloat(unitPriceElem.textContent.replace(" $", ""));
      total += quantity * unitPrice;
    }
  });
  totalPriceSpan.textContent = total + " $";
}

cards.forEach(cardBody => {
  const plusBtn = cardBody.querySelector(".fa-plus-circle");
  const minusBtn = cardBody.querySelector(".fa-minus-circle");
  const deleteBtn = cardBody.querySelector(".fa-trash-alt");
  const heartBtn = cardBody.querySelector(".fa-heart");
  const quantitySpan = cardBody.querySelector(".quantity");

  // Ajouter quantité
  plusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotalPrice();
  });

  // Réduire quantité (minimum 0)
  minusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      updateTotalPrice();
    }
  });

  // Supprimer l'article
  deleteBtn.addEventListener("click", () => {
    cardBody.remove();
    updateTotalPrice();
  });

  // Aimer / désaimer l'article (toggle couleur rouge)
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
  });
});

// Mettre à jour le prix total au chargement
updateTotalPrice();