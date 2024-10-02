import { displayTable } from "./display-info-or-remove/display-table.js";
import { collectAndVerifyItemCode } from "./handle-user-input/collect-and-verify-item-code.js";

//@!CREATING AND ADDING HEADER
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent = "Vending Machine";

//@!CREATES & DISPLAY TABLE
displayTable();

//@!CREATING "GET FOOD" BUTTON
const getFoodBtn = document.createElement("button");
document.body.appendChild(getFoodBtn);
getFoodBtn.innerText = "Get food";


// //verifying item code on click
getFoodBtn.onclick = collectAndVerifyItemCode;










































