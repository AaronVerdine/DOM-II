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

//  3) DblClick
const navTags = document.querySelectorAll(".nav-link");

navTags.forEach(item => {
  item.addEventListener("dblclick", e => {
    item.style.backgroundColor = "white";
  });
});

// 4) MouseOver
const logoHead = document.querySelector(".logo-heading");

logoHead.addEventListener("mouseover", e => {
  logoHead.style.backgroundColor = "white";
  logoHead.style.color = "green";
});

// 5) MouseOut
logoHead.addEventListener("mouseout", e => {
  logoHead.style.backgroundColor = "red";
  logoHead.style.color = "black";
  // e.stopPropagation();
});
//  Try using StopProoagation on this event listener

// 6) ContextMenu
const busImg = document.querySelector(".intro img");

busImg.addEventListener("contextmenu", e => {
  e.preventDefault();
});

//  7) Wheel
const mapImg = document.querySelector(".content-section img");
// const mapImg = document.querySelectorAll(".section img");

mapImg.addEventListener("wheel", e => {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  mapImg.style.transform = `scale(${scale})`;
});

let scale = 1;

const funBtn = document.addEventListener(".destination .btn");
