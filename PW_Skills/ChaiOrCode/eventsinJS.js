let imagesUl = document.querySelector("#images");
let image1 = document.querySelector("#imgId1");

imagesUl.addEventListener("click", function (e) {
  e.stopPropagation(); // stops the event from bubbling up to parent elements
  if (e.target.tagName === "SPAN") {
    e.target.parentNode.remove();
  }
//   console.log(e.target.id);
});
