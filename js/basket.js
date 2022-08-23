// Basket Math 

// Produkt in den Warenkorb
function add(i, type) {
    
    let index; 

    if (type == 'popular') {
        index = addedNames.indexOf(popularDishes[i]);
    
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(popularDishes[i]);
        addedDescriptions.push(popularDescription[i]);
        addedPricings.push(popularMealPrices[i]);
        addedAmount.push(1);
        }
    }
    if (type == 'salat') {
        index = addedNames.indexOf(salatDishes[i]);
        
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(salatDishes[i]);
        addedDescriptions.push(salatDescription[i]);
        addedPricings.push(salatPrices[i]);
        addedAmount.push(1);
        }
    }
    if (type == 'beefBurger') {
        index = addedNames.indexOf(beefBurgerDishes[i]);
        
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(beefBurgerDishes[i]);
        addedDescriptions.push(beefBurgerDescription[i]);
        addedPricings.push(beefBurgerPrices[i]);
        addedAmount.push(1);
        }
    }
    if(type == 'chickenBurger') {
        index = addedNames.indexOf(chickenBurgerDishes[i]);
        
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(chickenBurgerDishes[i]);
        addedDescriptions.push(chickenBurgerDescription[i]);
        addedPricings.push(chickenBurgerPrices[i]);
        addedAmount.push(1);
        }
    }
    if(type == 'vegieBurger') {
        index = addedNames.indexOf(vegieBurgerDishes[i]);
        
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(vegieBurgerDishes[i]);
        addedDescriptions.push(vegieBurgerDescription[i]);
        addedPricings.push(vegieBurgerPrices[i]);
        addedAmount.push(1);
        }
    }
    if(type == 'fingerFood') {
        index = addedNames.indexOf(fingerFoodDishes[i]);
        
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(fingerFoodDishes[i]);
        addedDescriptions.push(fingerFoodDescription[i]);
        addedPricings.push(fingerFoodDescription[i]);
        addedAmount.push(1);
        }
    }
    if(type == 'sides') {
        index = addedNames.indexOf(sideDishes[i]);
        
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(sideDishes[i]);
        addedDescriptions.push(sideDishesDescription[i]);
        addedPricings.push(sidesPrices[i]);
        addedAmount.push(1);
        }
    }
    if(type == 'drinks') {
        index = addedNames.indexOf(drinkDishes[i]);
        
        if (index == -1) {
            //typeMeal.push(type);
        addedNames.push(drinkDishes[i]);
        addedDescriptions.push(driksDescription[i]);
        addedPricings.push(drinksPrices[i]);
        addedAmount.push(typeMeal[i]);
        }
    } else {
        addedAmount[index]++;
    }
    saveBasket();
    renderFullBasket();
    payButton(); 
}


// Produkt aus den Warenkorb entfernen 
function decrease(i) {
    let index = addedAmount[i];
    if (index > 1){
        addedAmount[i]--;
        renderFullBasket();
        saveBasket();
    } else {
        removeDishCmpl(i);
    }
}
// Produkte entfernen
function removeDishCmpl(i) {
    addedNames.splice(i, 1);
    addedDescriptions.splice(i, 1);
    addedPricings.splice(i, 1);
    addedAmount.splice(i, 1);

    saveBasket();
    renderFullBasket();
}

//Produkt um 1 erhöhen (FOLGT)
function increase(i) {
    addedAmount[i]++;
    renderFullBasket();
    saveBasket();
}


function calcPrice(a, b) {
    let price = a * b; 
    return price.toFixed(2);
}

function subTotal() {
    let sum = 0;
    for (let i = 0; i < addedPricings.length; i++) {
        sum += addedAmount[i] * addedPricings[i];
    }
    if (sum <= 20){
        extraCost = 2.00;
    } else {
        extraCost = 0;
    }
    return sum.toFixed(2);   
}


function total(c, d) {
    endSum = parseFloat(c) + parseFloat(d);
    return endSum.toFixed(2);   
}

