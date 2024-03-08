let btn = document.querySelectorAll(".button");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
btn.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "black";
      h2.style.color = "black";
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "white";
      h2.style.color = "white";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "white";
      h2.style.color = "white";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "black";
      h2.style.color = "black";
    }
  });
});
