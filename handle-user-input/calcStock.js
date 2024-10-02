//*THIS FILE CONTAINS A FUNCTION THAT REDUCES THE STOCK WHEN THE USER PURCHASES A PRODUCT
export function calcStock() {

    const itemCode = localStorage.getItem("ItemCode");
    const currentStock = parseInt(localStorage.getItem(itemCode));
    const newStock = currentStock - 1;

    const itemIndex = parseInt(localStorage.getItem("IndexOfArray"));
    const classListOfStockElements = document.getElementsByClassName("q-in-stock");

    classListOfStockElements[itemIndex].innerText = newStock;

    localStorage.setItem(itemCode, newStock);
}