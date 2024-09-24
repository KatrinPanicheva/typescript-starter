"use strict";
// Create an empty array named 'cart' to store the items
const cart = [];
// TODO: Implement a loop to prompt the user for item details
function getInput(promptText) {
    return window.prompt(promptText) || "";
}
;
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
    // TODO: Prompt user for item name, price, and quantity
    const itemName = getInput('Input item name') /* TODO: Get user input */;
    // Break the loop if an empty item name is entered
    if (itemName === "") {
        break;
    }
    const itemPrice = parseFloat(getInput('Syötä hinta')) /* TODO: Get user input */;
    const itemQuantity = parseInt(getInput('Syötä kappale määrä'), 10) /* TODO: Get user input */;
    // Create an item object and add it to the 'cart' array
    const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);
// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
