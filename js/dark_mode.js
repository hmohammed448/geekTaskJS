let bodyBg = document.querySelector("body");
let toggleButton = document.getElementById("toggle");
let h1Text = document.getElementsByClassName("text-white");
let circBtn = document.getElementById("toggleBtn");


toggleButton.addEventListener("click", (e) => {
    bodyBg.style.backgroundColor = "#000000";
    console.log(circBtn, e);
})
toggleButton.addEventListener("click", (e) => {
    h1Text.style.color = "#FF0000";
    console.log(circBtn, e);
})
toggleButton.addEventListener("click", (e) => {
    circBtn.style.marginLeft = "calc(50px + 10px)";
    console.log(circBtn, e);
})