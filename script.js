const menubtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".nav-links");
//to open navigation menu
menubtn.addEventListener("click", () => {
  navLinks.classList.add("active");
  closeMenuBtn.style.display = "unset";
  menubtn.style.display = "none";
});

//to close navigation menu
closeMenuBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  closeMenuBtn.style.display = "none";
  menubtn.style.display = "unset";
});