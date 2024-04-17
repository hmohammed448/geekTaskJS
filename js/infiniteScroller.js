let cont = document.getElementById("cont");
// console.log(cont);

async function showImage(n) {
  for (let i = 0; i < n; i++) {
    let data = await fetch(`https://source.unsplash.com/random`);
    // console.log(data);
    let url = data.url;
    // console.log(url);

    let div = document.createElement("div");
    div.className = "one";
    div.setAttribute("data-scroll-direction", "left");
    div.innerHTML = `
        <img src="${url}" alt="">
        `;
    cont.appendChild(div);
  }
}
document.addEventListener("scroll", function (e) {
  // console.log(e);
  let { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;
  // console.log(scrollTop);
  // console.log(clientHeight);
  // console.log(scrollHeight);

  if (clientHeight + scrollTop + 10 > scrollHeight) {
    showImage(10);
  }
});

showImage(20);
