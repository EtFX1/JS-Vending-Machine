import { items } from "../stored-data/item-objects.js";
import { handlePayment } from "./handle-payment.js";

//?CONTAINS FUNCTION THAT WILL VERIFY WHETHER THE INPUT ITEM CODE IS CORRECT (and also calls function that handles payment)

//asks user to input item code and verifies it (called when "get food" button is clicked)
export function collectAndVerifyItemCode() {

    localStorage.setItem("paidSoFar", 0); //setting how much has been paid to 0 in local storage

    //!Verification of item code
    //converts list of objects to an array of arrays that contain the item's values
    const listOfItemsValues = items.map((item) => Object.values(item));

    let requestValid = false;

    while (!requestValid) {
        //todo: 
        let userInput = prompt("Enter the ITEM CODE of what you would like to have").toUpperCase();

        //checks if the item code that the user input is inside any of the arrays in "ListOfItemProperties", and stops the FOR loop when it's found
        //an example of itemValuesArr: ['A2', 'Pretzels', 5, 8]
        for (let itemValuesArr of listOfItemsValues) {
            if (itemValuesArr.includes(userInput)) {
                requestValid = true;
                const indexOfArray = listOfItemsValues.indexOf(itemValuesArr);
                const itemCode = itemValuesArr[0];
                console.log("for loop broken as item code has been found inside array");

                localStorage.setItem("ItemName", itemValuesArr[1]);
                localStorage.setItem("ItemPrice", itemValuesArr[2]);
                localStorage.setItem("IndexOfArray", indexOfArray);

                //!Verification of payment
                return handlePayment();

                // debugger

                // //@!CALCULATING STOCK
                // //todo: put in a function 
                // debugger;
                // const currentStock = parseInt(localStorage.getItem(itemCode));
                // const newStock = currentStock - 1;

                // const itemIndex = parseInt(localStorage.getItem("IndexOfArray"));
                // const classListOfStockElements = document.getElementsByClassName("q-in-stock");

                // classListOfStockElements[itemIndex].innerText = newStock;

                // localStorage.setItem(itemCode, newStock);

            }
        };

        //determines whether loop should be broken or continue running 
        if (requestValid) {
            console.log("Item code verified");
            break;
        } else {
            alert("Enter the correct item code 🙄");
        }

    }
}
