export function calcStock() {

    const itemCode = localStorage.getItem("ItemCode");
    const currentStock = parseInt(localStorage.getItem(itemCode));
    const newStock = currentStock - 1;

    const itemIndex = parseInt(localStorage.getItem("IndexOfArray"));
    const classListOfStockElements = document.getElementsByClassName("q-in-stock");

    classListOfStockElements[itemIndex].innerText = newStock;

    localStorage.setItem(itemCode, newStock);
}