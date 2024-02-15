const menuIcon = document.getElementById("menuIcon");
const xIcon = document.getElementById("xIcon");
const menuItems = document.getElementById("menuItems");
menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  {
    menuItems.style.display = "block";
    menuIcon.style.display = "none";
    xIcon.style.display = "block";
  }
});
xIcon.addEventListener("click", (e) => {
  e.preventDefault();
  {
    menuItems.style.display = "none";
    menuIcon.style.display = "block";
    xIcon.style.display = "none";
  }
});
