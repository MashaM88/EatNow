
let userName = prompt("Enter your first name:");
if (!userName) {
    userName = "Guest";
}
alert(`Welcome to EatNow Cafe, ${userName}! Enjoy our delicious menu.`);
let menuItems = ["Grilled Chicken", "Vegetable Pasta", "Beef Burger", "Fish Tacos", "Mushroom Soup"];
let menuList = document.getElementById("menuList");
function updateMenu() {
    menuList.innerHTML = "";
    menuItems.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${item}`;
        menuList.appendChild(li);
    });
}
updateMenu();
let newDish = prompt("Suggest a new dish to add to the menu:");
if (newDish && newDish.trim() !== "") {
    menuItems.push(newDish.trim());
    updateMenu();
} else {
    alert("Invalid input. Dish not added to the menu.");
}
