//*THIS FILE CONTAINS A FUNCTION THAT VERIFIES THE PAYMENT THAT THE USER INPUTS 

import { displayItemInfo } from "../display-info-or-remove/display-dialogue-components.js";

export function handlePayment() {

    //@!CREATING AND DISPLAYING DIALOGUE BOX
    //creating dialog box
    const dialog = document.createElement("dialog");
    document.body.appendChild(dialog);

    //Displays the item info
    displayItemInfo(dialog);

    //creating payment form 
    const paymentForm = document.createElement("form");
    dialog.appendChild(paymentForm);

    //creating label
    const label = document.createElement("label");
    paymentForm.appendChild(label);
    label.innerText = "Your payment (just type in the price): ";

    //creating input box
    const input = document.createElement("input");
    paymentForm.appendChild(input);

    //creating payment button
    const payBtn = document.createElement("button");
    payBtn.setAttribute("type", "submit");
    paymentForm.appendChild(payBtn);
    payBtn.innerText = "Pay"
    payBtn.style.margin = "0 10px";

    //creating close button
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    paymentForm.appendChild(closeBtn);
    closeBtn.innerText = "Go back";


    dialog.showModal();

    //!verifies payment when user clicks on "Pay" button
    paymentForm.onsubmit = verifyPayment;

    function verifyPayment(event) {

        event.preventDefault();

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
    };


    //!removes dialogue box when user clicks on "Go back" button
    closeBtn.onclick = removeDialogueBox;

    function removeDialogueBox() {
        dialog.close();
        // dialog.remove();
    }
}


