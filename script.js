// Step 1: Personalized Greeting
let userName = prompt("Enter your first name:");
if (!userName) {
    userName = "Guest"; // Default to "Guest" if input is empty
}

// Step 2: Welcome Message
alert(`Welcome to EatNow Cafe, ${userName}! Enjoy our delicious menu.`);

// Step 3: Display Menu Items
let menuItems = ["Grilled Chicken", "Vegetable Pasta", "Beef Burger", "Fish Tacos", "Mushroom Soup"];

// Function to update the menu on the webpage
function updateMenu() {
    let menuList = document.getElementById("menuList");
    if (menuList) {
        menuList.innerHTML = ""; // Clear old menu
        menuItems.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${index + 1}. ${item}`;
            menuList.appendChild(li);
        });
    } else {
        console.error("Menu list element not found! Check your HTML.");
    }
}

// Display the initial menu
updateMenu();

// Step 4: Adding a New Dish
let newDish = prompt("Suggest a new dish to add to the menu:");
if (newDish && newDish.trim() !== "") {
    menuItems.push(newDish.trim());
    updateMenu(); // Update the menu dynamically
} else {
    alert("Invalid input. Dish not added to the menu.");
}
