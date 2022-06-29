// Global Variables
let title = document.querySelector(".dynamic-p");
let menu = document.querySelector(".menu");
let secondMenu = document.querySelector(".second-menu");
let btn = document.querySelectorAll(".btn");
secondMenu.style.display = "none";


// Video looping

window.addEventListener("load", () => {
let videoAnimation = document.querySelector(".video");
videoAnimation.style.animationPlayState = "running";
});

// Getting the car brand from another page as Export/Import does not work

let lastname = localStorage.getItem("resulted");
title.innerHTML = `Results for <span class="lastname">${lastname}</span>:`;



// Buttons iteration

function btns(item) {
item.forEach( (b) => {b.addEventListener("click", () => {menu.style.display = "none";
secondMenu.style.display = "block";})})
}

btns(btn);
