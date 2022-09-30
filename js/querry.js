$(document).ready(function () {
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    var page1Top = $("#popularMeals").offset().top;
    var page2Top = $("#salat").offset().top;
    var page3Top = $("#beefBurger").offset().top;
    var page4Top = $("#chickenBurger").offset().top;
    var page5Top = $("#vegieBurger").offset().top;
    var page6Top = $("#fingerFood").offset().top;
    var page7Top = $("#sideDishes").offset().top;
    var page8Top = $("#drinks").offset().top;

    if (scrollPos >= page1Top && scrollPos < page2Top) {
      $("#popularHighlighted").addClass("highlighted");
      $("#salatHighlighted").removeClass("highlighted");
      $("#beefHighlighted").removeClass("highlighted");
      $("#chickenHighlighted").removeClass("highlighted");
      $("#vegieBurger").removeClass("highlighted");
      $("#fingerHighlighted").removeClass("highlighted");
      $("#sidesHighlighted").removeClass("highlighted");
      $("#drinksHighlighted").removeClass("highlighted");
    } else {
      $("#popularHighlighted").removeClass("highlighted");
    }

    if (scrollPos >= page2Top && scrollPos < page3Top) {
      $("#salatHighlighted").addClass("highlighted");
      $("#popularHighlighted").removeClass("highlighted");
      $("#beefHighlighted").removeClass("highlighted");
      $("#chickenHighlighted").removeClass("highlighted");
      $("#vegieBurger").removeClass("highlighted");
      $("#fingerHighlighted").removeClass("highlighted");
      $("#sidesHighlighted").removeClass("highlighted");
      $("#drinksHighlighted").removeClass("highlighted");
    } else {
      $("#salatHighlighted").removeClass("highlighted");
    }

    if (scrollPos >= page3Top && scrollPos < page4Top) {
      $("#beefHighlighted").addClass("highlighted");
      $("#salatHighlighted").removeClass("highlighted");
      $("#popularHighlighted").removeClass("highlighted");
      $("#chickenHighlighted").removeClass("highlighted");
      $("#vegieBurger").removeClass("highlighted");
      $("#fingerHighlighted").removeClass("highlighted");
      $("#sidesHighlighted").removeClass("highlighted");
      $("#drinksHighlighted").removeClass("highlighted");
    } else {
      $("#beefHighlighted").removeClass("highlighted");
    }

    if (scrollPos >= page4Top && scrollPos < page5Top) {
      $("#chickenHighlighted").addClass("highlighted");
      $("#salatHighlighted").removeClass("highlighted");
      $("#beefHighlighted").removeClass("highlighted");
      $("#popularHighlighted").removeClass("highlighted");
      $("#vegieBurger").removeClass("highlighted");
      $("#fingerHighlighted").removeClass("highlighted");
      $("#sidesHighlighted").removeClass("highlighted");
      $("#drinksHighlighted").removeClass("highlighted");
    } else {
      $("#chickenHighlighted").removeClass("highlighted");
    }

    if (scrollPos >= page5Top && scrollPos < page6Top) {
      $("#vegieHighlighted").addClass("highlighted");
      $("#salatHighlighted").removeClass("highlighted");
      $("#beefHighlighted").removeClass("highlighted");
      $("#chickenHighlighted").removeClass("highlighted");
      $("#popularHighlighted").removeClass("highlighted");
      $("#fingerHighlighted").removeClass("highlighted");
      $("#sidesHighlighted").removeClass("highlighted");
      $("#drinksHighlighted").removeClass("highlighted");
    } else {
      $("#vegieHighlighted").removeClass("highlighted");
    }

    if (scrollPos >= page6Top && scrollPos < page7Top) {
      $("#fingerHighlighted").addClass("highlighted");
      $("#salatHighlighted").removeClass("highlighted");
      $("#beefHighlighted").removeClass("highlighted");
      $("#chickenHighlighted").removeClass("highlighted");
      $("#vegieBurger").removeClass("highlighted");
      $("#popularHighlighted").removeClass("highlighted");
      $("#sidesHighlighted").removeClass("highlighted");
      $("#drinksHighlighted").removeClass("highlighted");
    } else {
      $("#fingerHighlighted").removeClass("highlighted");
    }

    if (scrollPos >= page7Top && scrollPos < page8Top) {
      $("#sidesHighlighted").addClass("highlighted");
      $("#salatHighlighted").removeClass("highlighted");
      $("#beefHighlighted").removeClass("highlighted");
      $("#chickenHighlighted").removeClass("highlighted");
      $("#vegieBurger").removeClass("highlighted");
      $("#fingerHighlighted").removeClass("highlighted");
      $("#popularHighlighted").removeClass("highlighted");
      $("#drinksHighlighted").removeClass("highlighted");
    } else {
      $("#sidesHighlighted").removeClass("highlighted");
    }

    if (scrollPos >= page8Top) {
      $("#drinksHighlighted").addClass("highlighted");
      $("#salatHighlighted").removeClass("highlighted");
      $("#beefHighlighted").removeClass("highlighted");
      $("#chickenHighlighted").removeClass("highlighted");
      $("#vegieBurger").removeClass("highlighted");
      $("#fingerHighlighted").removeClass("highlighted");
      $("#sidesHighlighted").removeClass("highlighted");
      $("#popularHighlighted").removeClass("highlighted");
    } else {
      $("#drinksHighlighted").removeClass("highlighted");
    }
  });
});
