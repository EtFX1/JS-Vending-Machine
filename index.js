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
const tableHeaders = ["Item Code", "Item Name", "Item Price (£)", "Quantity In Stock"];

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

//@!USER INPUT FOR FOOD THEY WANT


const button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Get food";


button.onclick = verifyItemCode;

//*(F) asks for and verifying item code is inside database
function verifyItemCode() {
    //converts list of objects to list of arrays that contain the item properties
    const listOfItemProperties = items.map((item) => Object.values(item));
    let requestValid = false;


    while (!requestValid) {
        let userInput = prompt("Enter the ITEM CODE of what you would like to have").toUpperCase();
        console.log(userInput);


        //checks each array in the list for user input and stops FOR loop when input is found
        for (let arr of listOfItemProperties) {
            if (arr.includes(userInput)) {
                requestValid = true;
                console.log("for loop broken as item code has been found");

                //passing array (containing properties) to function that verifies payment
                return collectAndVerifyPayment(arr);
            }
        };

        //determines whether loop should be broken or continue running 
        if (requestValid) {
            console.log("while loop broken");
            break;
        } else {
            alert("Enter the correct item code 🙄");
        }


    }
}


function collectAndVerifyPayment(itemValuesArr) {
    const dialog = document.createElement("dialog");
    document.body.appendChild(dialog);
    displayOptions();
    displayFormAndHandlePayment();

    //!function that displays options
    function displayOptions() {
        const options = {
            "Item Name": itemValuesArr[1],
            "Item Price": `£${itemValuesArr[2]}`,
            "No. Left In Stock": itemValuesArr[3]
        }

        const dataToDisplay = Object.entries(options);
        console.log(dataToDisplay);

        dataToDisplay.forEach((array) => {

            //creates and adds heading 
            const heading = document.createElement("h2");
            dialog.appendChild(heading);
            heading.innerText = array[0]; //populates the h2 with the heading name

            //creates and adds paragraph 
            const p = document.createElement("p");
            dialog.appendChild(p);
            p.innerText = array[1]; //populates the p with the associated data
        });
    }

    //!function that displays payment form and handles payment
    function displayFormAndHandlePayment() {

        //@!DISPLAYING THE FORM
        //todo: make this its own dang function!
        const form = document.createElement("form");
        dialog.appendChild(form);

        const label = document.createElement("label");
        form.appendChild(label);
        label.innerText = "Your payment (just type in the price): ";

        const input = document.createElement("input");
        form.appendChild(input);


        const payBtn = document.createElement("button");
        payBtn.setAttribute("type", "submit");
        form.appendChild(payBtn);
        payBtn.innerText = "Pay"
        payBtn.style.margin = "0 10px";


        const closeBtn = document.createElement("button");
        closeBtn.setAttribute("type", "button");
        form.appendChild(closeBtn);
        closeBtn.innerText = "Go back";

        closeBtn.onclick = function () {
            dialog.close();
        }

        //@!HANDLING PAYMENT


    }


    dialog.showModal();
}



































