const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");

const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

const totalNumberOfItems =  document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes =  document.getElementById("taxes");
const cartTotal =  document.getElementById("total");

const showHideCartSpan =  document.getElementById("show-hide-cart");
let isCartShowing  = false;