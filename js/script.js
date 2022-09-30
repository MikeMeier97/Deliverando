// Produkte
let popularDishes = [
  "Cheeseburger Classic",
  "Mozzarella Sticks (5 Stück)",
  "Zwiebelringe",
];
let salatDishes = [
  "Salat",
  "Beilagensalat",
  "Gemischter Salat",
  "Gemischter Salat mit gegrillten Hähnchenstreifen",
];
let beefBurgerDishes = [
  "Hamburger Classic",
  "Cheeseburger Classic",
  "Cheese-Jalapenos Burger",
];
let chickenBurgerDishes = [
  "Onion Barbecue Burger",
  "Mediterran Burger",
  "Burger Deluxe",
  "Cheesy Cheesburger",
  "Spezialburger",
  "Real Spicy Burger",
];
let vegieBurgerDishes = ["Veggie Cheeseburger", "Classic Veggie Burger"];
let fingerFoodDishes = [
  "Chicken Wings (7 Stück)",
  "Chicken Nuggets (7 Stück)",
  "Mozzarella Sticks (5 Stück)",
  "Jalapenos (5 Stück)",
];
let sideDishes = [
  "Zwiebelringe",
  "Pommes frites",
  "Country Potatoes",
  "Twister Pommes",
];
let drinkDishes = [
  "Coca Cola 0,33l",
  "Coca Cola Light 0,33L",
  "Mezzo Mix 0,33l",
  "Sprite 0,33l",
];
let popularDescription = [
  "Wahl aus: 150g oder 250g.",
  "Wahl aus: mit Barbecuesauce, mit Salsasauce, mit Sour Cream, ohne Sauce, mit Ketchup und mehr.",
  "Wahl aus: mit Barbecuesauce, mit Salsasauce, mit Sour Cream, ohne Sauce, mit Ketchup und mehr.",
];
let salatDescription = [
  "Wahl aus: mit Essig-Öl-dressing, mit Jpghirt-Dressing oder ohne Dressing.",
  "Wahl aus: mit Essig-Öl-dressing, mit Jpghirt-Dressing oder ohne Dressing.",
  "Gemischter Salat mit gegrillten Hähnchenstreifen",
  "Wahl aus: Wahl aus: 150g oder 250g.",
];
let beefBurgerDescription = [
  "Wahl aus: 150g oder 250g.",
  "Wahl aus: mit Salatsauce.",
  "Wahl aus: mit Röstzwiebeln und Barbecuesauce.",
];
let chickenBurgerDescription = [
  "Wahl aus: mit Rocula, Parmesan und Kräutersauce.",
  "Wahl aus: mit Röstzwiebeln, Cheese-Jalapenos und Barbecuesauce.",
  "Wahl aus: Cheddar, Hartkäse und Classic-Sauce.",
  "Wahl aus: mit Cheddar, gebratenen Röstzwiebeln, Cheese-Jalapenos, Spiegelei und Barbecuesauce.",
  "Wahl aus: mit Cheddar, gebratenen Röstzwiebeln, frischen Chilis und Barbecuesauce.",
  "Wahl aus: mit Sour Cream, ohne Sauce, mit Country Potatoes, mit Pommes frites, mit Twister Pommes und mehr.",
];
let vegieBurgerDescription = [
  "Wahl aus: mit Sour Cream, ohne Sauce, mit Country Potatoes, mit Pommes frites, mit Twister Pommes und mehr.",
  "Wahl aus: mit Sour Cream, ohne Sauce, mit Country Potatoes, mit Pommes frites, mit Twister Pommes und mehr.",
];
let fingerFoodDescription = [
  "Wahl aus: mit Sour Cream, ohne Sauce, mit Country Potatoes, mit Pommes frites, mit Twister Pommes und mehr.",
  "Wahl aus: mit Sour Cream, ohne Sauce, mit Country Potatoes, mit Pommes frites, mit Twister Pommes und mehr.",
  "Wahl aus: mit Sour Cream, ohne Sauce, mit Country Potatoes, mit Pommes frites, mit Twister Pommes und mehr.",
  "Wahl aus: mit Barbecuesauce, mit Salsasauce, mit Sour Cream, ohne Sauce, mit Ketchup und mehr.",
];
let sideDishesDescription = [
  "Wahl aus: mit Barbecuesauce, mit Salsasauce, mit Sour Cream, ohne Sauce, mit Ketchup und mehr.",
  "Wahl aus: mit Barbecuesauce, mit Salsasauce, mit Sour Cream, ohne Sauce, mit Ketchup und mehr.",
  "Wahl aus: mit Frischkäse.",
  "Wahl aus: mit Barbecuesauce, mit Salsasauce, mit Sour Cream, ohne Sauce, mit Ketchup und mehr.",
];
let driksDescription = ["0,33l", "0,33l", "0,33l", "0,33l"];
let popularMealPrices = [9.5, 4.5, 4.5];
let salatPrices = [3.5, 5.5, 8.9, 8.9];
let beefBurgerPrices = [9.5, 9.9, 9.9];
let chickenBurgerPrices = [9.9, 9.9, 9.7, 9.9, 9.9, 11.9];
let vegieBurgerPrices = [12.9, 11.9];
let fingerFoodPrices = [10.5, 9.9, 4.9, 4.5];
let sidesPrices = [4.5, 4.9, 4.5, 2.5];
let drinksPrices = [2.0, 2.0, 2.0, 2.0];

// Checkout
let addedAmount = [];
let addedNames = [];
let addedDescriptions = [];
let addedPricings = [];
let endSum;
let extraCost = 2.0;

// Check the Meal
let typeMeal = [];
let typePopular = 0;
let typeSalat = 0;
let typeBeef = 0;
let typeChicken = 0;
let typeVegie = 0;
let typeFingerFood = 0;
let typeSides = 0;
let typeDrinks = 0;

// Onload
function onload() {
  loadBasket();
  renderDishes();
  renderFullBasket();
  payButton();
}

// Gerichte laden
function renderDishes() {
  populardishesRender();
  salatdishesRender();
  beefBurgerdishesRender();
  chickenBurgerdishesRender();
  vegieBurgerdishesRender();
  fingerFooddishesRender();
  sidesdishesRender();
  drinksdishesRender();
}

// Paybutton active
function payButton() {
  let index = endSum;
  let payButton = document.getElementById("payButton");
  if (index > 20) {
    //Paybutton Active
    payButton.classList.add("paybuttonActive");
  }
  if (index < 20) {
    payButton.classList.add("paybutton");
  }
}
