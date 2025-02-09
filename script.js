// Class representing a single menu item
class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = parseFloat(price).toFixed(2);
    }

    getInfo() {
        return `${this.name} - $${this.price}`;
    }
}

// Class to manage the menu
class Menu {
    constructor() {
        this.items = []; // Stores menu items
    }

    // Add an item to the menu
    addItem(name, price) {
        if (!name.trim() || isNaN(price) || price <= 0) {
            alert("Please enter a valid name and positive price!");
            return;
        }

        // Prevent duplicate entries
        if (this.items.some(item => item.name.toLowerCase() === name.toLowerCase())) {
            alert("Item already exists!");
            return;
        }

        this.items.push(new MenuItem(name, price));
        this.displayMenu(); // ✅ Ensure UI updates
    }

    // Remove an item from the menu
    removeItem(index) {
        this.items.splice(index, 1);
        this.displayMenu();
    }

    // Display menu list
    displayMenu() {
        const menuList = document.getElementById("menuList");
        menuList.innerHTML = "";

        this.items.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${item.getInfo()} 
                <button onclick="menu.removeItem(${index})">❌</button>
            `;
            menuList.appendChild(listItem);
        });
    }
}

// Instantiate the menu globally
const menu = new Menu();

// Function to handle user input for adding an item
function addItem() {
    const name = document.getElementById("itemName").value;
    const price = document.getElementById("itemPrice").value;
    
    menu.addItem(name, price); // Add item to the menu
    menu.displayMenu(); // Update the UI ✅

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
}