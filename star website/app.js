const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});
