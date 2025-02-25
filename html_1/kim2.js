function dressUp(item) {
    let clothingItem = document.getElementById(item);
    clothingItem.style.display = (clothingItem.style.display === "none" || clothingItem.style.display === "") ? "block" : "none";
}
