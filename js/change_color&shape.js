// console.log("Hello");
let div = document.getElementById("circle");
let divcirChild = document.getElementById("circleChild");


let btncolor = document.getElementById("chngcolor")
let btnshape = document.getElementById("chngshape")

// function color change button
btncolor.addEventListener("click", () => {
    // colorpallet array
    let colorOption = ["red", "green", "blue", "yellow", "purple", "voilet", "cyan", "orange", "grey", "lightblue"];
    // generating random no. for color
    div.style.backgroundColor = colorOption[Math.floor(Math.random() * colorOption.length)];
})

// function shape changing button
btnshape.addEventListener("click", () => {
    // clippath array
    let clipArr = ["inset(60% 0 0 0)", "circle(50% at 50% 50%)", "inset(10% 10% 10% 10%)", "polygon(50% 0%, 0% 100%, 100% 100%", "polygon(30% 0, 70% 0, 100% 35%, 50% 100%, 0 35%)"];
    // generating random clip
    divcirChild.style.clipPath = clipArr[Math.floor(Math.random() * clipArr.length)];
})

// function shape changing button
btnshape.addEventListener("mousemove", () => {
    // clippath array
    let clipArr = ["inset(60% 0 0 0)", "circle(50% at 50% 50%)", "inset(10% 10% 10% 10%)", "polygon(50% 0%, 0% 100%, 100% 100%", "polygon(30% 0, 70% 0, 100% 35%, 50% 100%, 0 35%)"];
    // generating random clip
    divcirChild.style.clipPath = clipArr[Math.floor(Math.random() * clipArr.length)];
})


