var btn = document.getElementById("menu-btn");
var menu = document.getElementById("menu-items");

btn.addEventListener("click", () => {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
