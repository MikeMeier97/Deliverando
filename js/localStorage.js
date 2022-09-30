// Local Storage

//Speichern Warenkorb
function saveBasket() {
  let addedNamesAsText = JSON.stringify(addedNames);
  let addedDescriptionsAsText = JSON.stringify(addedDescriptions);
  let addedPricingsAsText = JSON.stringify(addedPricings);
  let addedAmountAsText = JSON.stringify(addedAmount);

  localStorage.setItem("addedNames", addedNamesAsText);
  localStorage.setItem("addedDescriptions", addedDescriptionsAsText);
  localStorage.setItem("addedPricings", addedPricingsAsText);
  localStorage.setItem("addedAmount", addedAmountAsText);
}

// Gespeicherten Warenkorb laden
function loadBasket() {
  let addedNamesAsText = localStorage.getItem("addedNames");
  if (addedNamesAsText) {
    addedNames = JSON.parse(addedNamesAsText);
  }

  let addedDescriptionsAsText = localStorage.getItem("addedDescriptions");
  if (addedDescriptionsAsText) {
    addedDescriptions = JSON.parse(addedDescriptionsAsText);
  }

  let addedPricingsAsText = localStorage.getItem("addedPricings");
  if (addedPricingsAsText) {
    addedPricings = JSON.parse(addedPricingsAsText);
  }

  let addedAmountAsText = localStorage.getItem("addedAmount");
  if (addedAmountAsText) {
    addedAmount = JSON.parse(addedAmountAsText);
  }
}
