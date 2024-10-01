//?CONTAIN FUNCTIONS THAT DISPLAY THE ITEM INFORMATION (AS HEADERS AND PARAGRAPHS) AND A FORM TO COLLECT USER PAYMENT


//!Displays the item information
export function displayItemInfo(dialog) {
    //iterates over item property, creates an html element for it and populates it

    const itemNameInLocalStorage = localStorage.getItem("ItemName");
    const itemPriceInLocalStorage = parseInt(localStorage.getItem("ItemPrice"));
    const stockInLocalStorage = parseInt(localStorage.getItem("LeftInStock"));

    const itemsDataObj = {
        "Item Name": itemNameInLocalStorage,
        "Item Price": `£${itemPriceInLocalStorage}`,
        "Left In Stock": stockInLocalStorage
    }

    for (let key in itemsDataObj) {
        //!creates and adds heading 
        const heading = document.createElement("h2");
        dialog.appendChild(heading);

        //populates the h2 with the heading name
        heading.innerText = key;

        //!creates and adds paragraph 
        const p = document.createElement("p");
        dialog.appendChild(p);

        //populates the p with the associated data
        p.innerText = itemsDataObj[key];
    }

}