// Your code goes here

//  1) MouseEnter
const navContainer = document.querySelector(".nav-container");
navContainer.addEventListener("mouseenter", e => {
  navContainer.style.backgroundColor = "red";
});

//  2) MouseLeave
navContainer.addEventListener("mouseleave", e => {
  navContainer.style.backgroundColor = "white";
});
