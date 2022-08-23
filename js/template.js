// Templates 

//Template render functions
function populardishesRender() {
    for (let j = 0; j < popularDishes.length; j++) {
    let popularMeals = document.getElementById('PopularDishes');
    popularMeals.innerHTML += popularTemplateDishes(j);
}
}

function salatdishesRender() {
    for (let j = 0; j < salatDishes.length; j++) {
    let salatMeals = document.getElementById('salatDishes');
    salatMeals.innerHTML += salatTemplateDishes(j);
}
}

function beefBurgerdishesRender() {
    for (let j = 0; j < beefBurgerDishes.length; j++) {
    let beefBurgerMeals = document.getElementById('beefBurgerDishes');
    beefBurgerMeals.innerHTML += beefBurgerTemplateDishes(j);
}    
}

function chickenBurgerdishesRender(){ 
    for (let j = 0; j < chickenBurgerDishes.length; j++) {
    let chickenBurgerMeals = document.getElementById('ChickenBurgerDishes');
    chickenBurgerMeals.innerHTML += chickenBurgerTemplateDishes(j);
}
}

function vegieBurgerdishesRender() {
    for (let j = 0; j < vegieBurgerDishes.length; j++) {
    let vegieBurgerMeals = document.getElementById('VegieBurgerdishes');
    vegieBurgerMeals.innerHTML += vegieBurgerTemplateDishes(j);
}
}

function fingerFooddishesRender() {
    for (let j = 0; j < fingerFoodDishes.length; j++) {
    let fingerFoodMeals = document.getElementById('FingerFoodDishes');
    fingerFoodMeals.innerHTML += fingerFoodTemplateDishes(j);
}
}

function sidesdishesRender() {
for (let j = 0; j < sideDishes.length; j++) {
    let sidesMeals = document.getElementById('SidesDishes');
    sidesMeals.innerHTML += sidesTemplateDishes(j);
}
}

function drinksdishesRender() {
for (let j = 0; j < drinkDishes.length; j++) {
    let sidesMeals = document.getElementById('Drinkdishes');
    sidesMeals.innerHTML += drinksTemplateDishes(j);
}
}

// Warenkorb gefüllt rendern
function renderFullBasket() {
    let basketContent = document.getElementById('Basket');

    basketContent.innerHTML = '';
    if (addedAmount.length <= 0) {
        basketContent.innerHTML = templateEmptyBasket();
    } else {
        for(let i = 0; i < addedNames.length; i++) {
            basketContent.innerHTML += templateFullBasket(i); 
        }
            basketContent.innerHTML += templateBasketCalc(); 
    }
}


// Warenkorb leer Tamplate
function templateEmptyBasket() {
    return /*html*/ `<div class="cardSidebar">
    <h1 class="cardTitle">Warenkorb</h1>
    <img class="shoppingBag" src="./img/shopping-bag-64.png">
    <h2 class="cardUndertitle">Fülle deinen Warenkorb</h2>
    <p class="cardText">Füge einige leckere Gerichte aus der Speisekarte <br> hinzu und bestelle dein Essen
    </p>
</div>`
}

//Gefüllter Warenkorb Template
function templateFullBasket(i) {
    return /*html*/ `
    <div class="full-basket">
        <div class="basket-upper">
            <div class="basket-left">
                <span class="basket-amount font"><b>${addedAmount[i]}</b></span>
                <span class="basket-description">
                    <span class="basket-dish font"><b>${addedNames[i]}</b></span>
                    <span class="basket-dish-description font">${addedDescriptions[i]}</span>
                </span>
            </div>
            <div class="basket-right">
                <div class="basket-pricing font" id="subtotal-amount">${calcPrice(addedAmount[i], addedPricings[i]).replace('.',',')}<span>€</span></div>
            </div>

            <div class="basket-change-amount">
                <img class="delete-dish cursor" src="img/delete.png" onclick="removeDishCmpl(${i})">
                <img class="basket-minus cursor" src="img/minus2.png" onclick="decrease(${i})">
                <img class="basket-plus cursor" src="img/plus2.png" onclick="increase(${i})">
            </div>
        </div>
    </div>
`
}

 //Untere Berechnung Warenkorb Template
function templateBasketCalc() {
    return /*html*/ `
   <div class="basket-calc">
      <div class="basket-calc-left font">
           Zwischensumme:<br><br>
            Lieferkosten:<br>
           <h4>Gesamt:</h4>
       </div>
        <div class="basket-calc-right font">
            <span></span>${subTotal().replace('.',',')}€<br><br>
            <span>${extraCost.toFixed(2).replace('.',',')}</span>€<br>
           <h4><span>${total(subTotal(), extraCost).replace('.',',')}</span>€</h4>
        </div>
    </div>
    <div id="payButton" class="paybutton"><h4>Bezahlen <span>(${total(subTotal(), extraCost).replace('.',',')}€)</span></h4></div>
    `
}
 

//Templates dishes cards 
function popularTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${popularDishes[i]}</h4>
    <p> <i>${popularDescription[i]}</i></p>
    <h4 class="price">${popularMealPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'popular')">+</div>
</div>
`}


function salatTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${salatDishes[i]}</h4>
    <p> <i>${salatDescription[i]}</i></p>
    <h4 class="price">${salatPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'salat')">+</div>
</div>
`}


function beefBurgerTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${beefBurgerDishes[i]}</h4>
    <p> <i>${beefBurgerDescription[i]}</i></p>
    <h4 class="price">${beefBurgerPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'beefBurger')">+</div>
</div>
`}


function chickenBurgerTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${chickenBurgerDishes[i]}</h4>
    <p> <i>${chickenBurgerDescription[i]}</i></p>
    <h4 class="price">${chickenBurgerPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'chickenBurger')">+</div>
</div>
`}


function vegieBurgerTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${vegieBurgerDishes[i]}</h4>
    <p> <i>${vegieBurgerDescription[i]}</i></p>
    <h4 class="price">${vegieBurgerPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'vegieBurger')">+</div>
</div>
`}


function fingerFoodTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${fingerFoodDishes[i]}</h4>
    <p> <i>${fingerFoodDescription[i]}</i></p>
    <h4 class="price">${fingerFoodPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'fingerFood')">+</div>
</div>
`}


function sidesTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${sideDishes[i]}</h4>
    <p> <i>${sideDishesDescription[i]}</i></p>
    <h4 class="price">${sidesPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'sides')">+</div>
</div>
`}


function drinksTemplateDishes(i) {
return /*html*/`
<div class="mealCard">
    <h4>${drinkDishes[i]}</h4>
    <p> <i>${driksDescription[i]}</i></p>
    <h4 class="price">${drinksPrices[i].toFixed(2)}€</h4>
    <div class="addBotton" onclick="add(${i},'drinks')">+</div>
</div>
`}