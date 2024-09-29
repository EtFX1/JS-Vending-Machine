//CREATES A TABLE
import { items } from "../stored-data/item-objects.js"
export function displayTable() {

    //function that will add a border to any element that is passed to it 
    const addBorderToElem = function (elem) {
        elem.style.border = "1px solid black";
    }

    //creating and appending table to body
    const table = document.createElement("table");
    document.body.appendChild(table);
    addBorderToElem(table);

    //adding a margin to the bottom of the table
    table.style.marginBottom = "20px";

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

    //creating rows for each item and populating them with the data
    items.forEach((itemObj) => {
        const tr = document.createElement("tr"); //create a row
        tbody.appendChild(tr); //add it to the body

        //creating 4 cells inside each row
        //? for loop turns each object in the items list into an array and iterates over the array
        //then for each element in the array create a cell element and add content to it
        //e.g ["D3", "Trail Mix", 5.50, 13]

        const itemArr = Object.values(itemObj);
        for (let i = 0; i < itemArr.length; i++) {
            const td = document.createElement("td");
            tr.appendChild(td);
            td.textContent = itemArr[i];
            addBorderToElem(td);

            //adding a class to the last element
            if (i === 3) {
                td.classList.add("q-in-stock");
            }
        }
    });


}