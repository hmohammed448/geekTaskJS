let bodyBg = document.querySelector("body");
let toggleButton = document.getElementById("toggle");
let h1Text = document.getElementsByClassName("text-white");
let circBtn = document.getElementById("toggleBtn");


let flag = true;
toggleButton.addEventListener("click", (e) => {
    if (flag == true) {
        bodyBg.style.backgroundColor = "#000000";
        circBtn.style.marginLeft = "60px";
        h1Text[0].style.color = "#ffffff";
        flag = false;
        console.log(circBtn, e);
    } else {
        bodyBg.style.backgroundColor = "#ffffff";
        circBtn.style.marginLeft = "0px";
        h1Text[0].style.color = "#000000";
        flag = true;
        console.log(circBtn, e);
    }
})