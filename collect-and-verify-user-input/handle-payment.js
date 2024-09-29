import { displayItemInfo } from "../display-info-or-remove/display-dialogue-components.js";

//?FUNCTION THAT DISPLAYS CALLS OTHER FUNCTIONS TO DISPLAY THE DIALOGUE BOX 

//@!CREATING AND DISPLAYING DIALOGUE BOX
export const dialog = document.createElement("dialog");
document.body.appendChild(dialog);

const paymentForm = document.createElement("form");
dialog.appendChild(paymentForm);


const label = document.createElement("label");
paymentForm.appendChild(label);
label.innerText = "Your payment (just type in the price): ";

const input = document.createElement("input");
paymentForm.appendChild(input);


const payBtn = document.createElement("button");
payBtn.setAttribute("type", "submit");
paymentForm.appendChild(payBtn);
payBtn.innerText = "Pay"
payBtn.style.margin = "0 10px";


const closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
paymentForm.appendChild(closeBtn);
closeBtn.innerText = "Go back";

//verifies payment when user clicks on "Pay" button
paymentForm.onsubmit = verifyPayment;

//removes dialogue box when user clicks on close button
closeBtn.onclick = removeDialogueBox;


export function handlePayment() {

    //!Displays the item info
    displayItemInfo();

    dialog.showModal();
}

//!function that removes the dialogue box
function removeDialogueBox() {
    dialog.close();
}

//@!VERIFYING PAYMENT
function verifyPayment(event) {

    event.preventDefault();
    console.log("it works");

    const originalPrice = parseInt(localStorage.getItem("ItemPrice"));

    const userInput = parseInt(input.value);
    let paymentValid = false;

    //"paidSoFar" in local storage is 0
    const paidSoFar = parseInt(localStorage.getItem("paidSoFar")) + userInput;

    localStorage.setItem("paidSoFar", paidSoFar); //storing how much has been paid so far inside local storage

    if (originalPrice < paidSoFar) {
        const change = paidSoFar - originalPrice;
        alert(`You overpaid. Your change is £${change}`);
        paymentValid = true;
    } else if (originalPrice > paidSoFar) {
        const owed = originalPrice - paidSoFar;
        alert(`You underpaid. You still owe £${owed}`);
    } else {
        paymentValid = true;
    }

    input.value = ""; //clears the form after it's submitted

    if (paymentValid) {
        alert("Thank you for your purchase 😁");
        removeDialogueBox();
    }
}
