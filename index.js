class Item {
    constructor(code, foodName, price, inStock) {
        this.code = code;
        this.foodName = foodName;
        this.price = price;
        this.inStock = inStock;
    }
}

const items = [
    new Item("A1", "Chips", 3.00, 5),
    new Item("A2", "Pretzels", 5.00, 8),
    new Item("A3", "Biscuits", 6.00, 6),
    new Item("B1", "Energy Bar", 9.00, 10),
    new Item("B2", "Soda", 2.50, 12),
    new Item("B3", "Chocolate Bar", 4.00, 15),
    new Item("C1", "Candy", 1.50, 7),
    new Item("C2", "Cookies", 3.50, 4),
    new Item("C3", "Granola Bar", 2.00, 9),
    new Item("D1", "Energy Drink", 8.00, 18),
    new Item("D2", "Gum", 1.00, 11),
    new Item("D3", "Trail Mix", 5.50, 13)
];

//!CREATING AND ADDING HEADER
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent = "Vending Machine";

const borderStyle = "1px solid black";

// @!CREATING AND ADDING TABLES TO THE PAGE
//creating and appending table to body
const table = document.createElement("table");
document.body.appendChild(table);
table.style.border = borderStyle;

//creating and appending table head to table;
const thead = document.createElement("thead");
table.appendChild(thead);

//creating and appending table row to table
const tr = document.createElement("tr");
thead.appendChild(tr);

//creating and appending 4 tables cells to the row

const tableHeaders = ["Item Code", "Item Name", "Item Price", "Quantity In Stock"];

for (let index = 0; index < tableHeaders.length; index++) {
    const td = document.createElement("td"); //creating a cell
    tr.appendChild(td); //adding a cell to the row
    td.style.border = borderStyle; //adding a border to the cell
    td.textContent = tableHeaders[index]; //adding the correct header name to the cell
};












