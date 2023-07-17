const assert = require("assert");
const Cart = require("./Cart.js");

const cart = new Cart();
cart.addToCart("cheesecake");

/**
 * Compares the first and second arguments, and throws an insightfull error,
 * if their values are different
 */
assert.deepStrictEqual(cart.items, ["cheesecake"]);

console.log("The addToCart function can add an item to the cart");
