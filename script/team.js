let x = false;
const clicker = document.getElementById("menu-control");
const menu = document.getElementById("menu");
clicker.addEventListener("click", function () {
    if (!x) {
        menu.classList.add("active");
        x = true;
    } else {
        x = false;
        menu.classList.remove("active");
    }
});
