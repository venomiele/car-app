// Global Variables

let title = document.querySelector(".dynamic-p");

// Video looping

window.addEventListener("load", () => {
let videoAnimation = document.querySelector(".video");
videoAnimation.style.animationPlayState = "running";
});

// Getting the car brand from another page as Export/Import does not work

let lastname = localStorage.getItem("resulted");
title.innerHTML = `Results for <span class="lastname">${lastname}</span>:`;
