let x = false;
const clicker = document.getElementById("control");
const menu = document.getElementById("menu");
clicker.addEventListener("click", function () {
  if (!x) {
    clicker.classList.add("close");
    clicker.innerText = "x";
    menu.classList.add("active");
    x = true;
  } else {
    clicker.classList.remove("close");
    x = false;
    clicker.innerText = "s";
    menu.classList.remove("active");
  }
});
