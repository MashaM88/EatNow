//Personalized Greeting
let userName = prompt("Enter your first name:");
if (!userName) {
    userName = "Guest";
}
//Welcome Message
alert(`Welcome to Sams' EatNow Cafe, ${userName}! Enjoy our tasty & delicious menu.`);
//Display Menu Items 
let menuItems = ["Grilled Chicken", "Vegetable Pasta", "Beef Burger", "Fish Tacos", "Mushroom Soup"];
console.log("\nEatNow Cafe Menu:");
menuItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
//Adding a New Dish
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
