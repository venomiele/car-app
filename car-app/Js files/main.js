window.addEventListener("load", () => {
let videoAnimation = document.querySelector(".video");
videoAnimation.style.animationPlayState = "running";
});

// Getting the car brand from another page as Export/Import does not work

let lastname = localStorage.getItem("resulted");
console.log(lastname);