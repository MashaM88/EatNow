
let userName = prompt("Enter your first name:");
if (!userName) {
    userName = "Guest";
}
alert(`Welcome to EatNow Cafe, ${userName}! Enjoy our delicious menu.`);
let menuItems = ["Grilled Chicken", "Vegetable Pasta", "Beef Burger", "Fish Tacos", "Mushroom Soup"];
console.log("\nEatNow Cafe Menu:");
menuItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
let newDish = prompt("Suggest a new dish to add to the menu:");
if (newDish && newDish.trim() !== "") {
    menuItems.push(newDish.trim());
    console.log("\nUpdated Menu:");
    menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
} else {
    console.log("Invalid input. Dish not added to the menu.");
}
