class Item {
    constructor(code, foodName, price, inStock) {
        this.code = code;
        this.foodName = foodName;
        this.price = price;
        this.inStock = inStock;
    }
}

//!CREATING AND ADDING HEADER
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent = "Vending Machine";



//@! TABLE HEADER

//function that will add a border to any element that is passed to it 
const addBorderToElem = (elem) => {
    elem.style.border = "1px solid black";
}


//creating and appending table to body
const table = document.createElement("table");
document.body.appendChild(table);
addBorderToElem(table);


//creating and appending table head to table;
const thead = document.createElement("thead");
table.appendChild(thead);

//creating and appending table row to table
const trHead = document.createElement("tr");
thead.appendChild(trHead);

//creating table headers
const tableHeaders = ["Item Code", "Item Name", "Item Price", "Quantity In Stock"];

for (let index = 0; index < tableHeaders.length; index++) {
    const td = document.createElement("td"); //creating a cell
    trHead.appendChild(td); //adding a cell to the row
    addBorderToElem(td); //adding a border to the cell
    td.textContent = tableHeaders[index]; //adding the correct header name to the cell
};

//@!BODY
const tbody = document.createElement("tbody");
table.appendChild(tbody);

//items list that contains objects from "Items" class
const items = [
    new Item("A1", "chips", 3.00, 5),
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

//creating rows for each item
items.forEach((item) => {
    const tr = document.createElement("tr"); //create a row
    tbody.appendChild(tr); //add it to the body

    //creating 4 cells 
    for (let x of Object.values(item)) {
        const td = document.createElement("td"); //create cell
        tr.appendChild(td); //add cell to row
        td.textContent = x; //populate cell
        addBorderToElem(td);//add border to cell
    }
});

//@!USER INPUT


const button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Get food";


/*
Ask the user for what they want 
Check each item object in the list
if the user request is in there, send them a payment prompt
else, display the prompt again 


WHILE requestValid = false:
    userInput = prompt("")

    for

    

*/

//*(F) asking for and verifying item code 


button.onclick = verifyItemCode;


function verifyItemCode() {
    let requestValid = false;

    while (!requestValid) {
        let userInput = prompt("Enter the ITEM CODE of what you would like to have").toUpperCase();

        for (let item of items) {
            if (Object.values(item).includes(userInput)) {
                console.log("in there");
                requestValid = true;
                break;
            } else {
                alert("Item invalid. Try again.");
                break;
            }
        };
    }
}






















