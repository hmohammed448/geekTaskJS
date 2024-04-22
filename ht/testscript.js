let container = document.querySelector(".container");

let data = [
  {
    name: "Sasha Ho",
    position: "Accountant",
    body: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to thisguy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. Ilove developers who respect each and every aspect of a throughly thought out design and do their best toput it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    img: "44.jpg",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    body: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    img: "pexels-photo-415829.webp",
  },
  {
    name: "Iida Niskane",
    position: "Data Entry",
    body: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    img: "photo-1494790108377-be9c29b29330.jpeg",
  },
];

function showData(data, i) {
  let count = 1;

  let creatediv = document.createElement("div");
  creatediv.className = "post";

  creatediv.innerHTML = `<span class="loader"></span>
  <div class="fas fa-quote-right fa-quote"></div>
  <div class="fas fa-quote-left fa-quote"></div>
    <p class="para">${data[i]["body"]}</p>
    <div class="details">
        <div class="img"><img src="./${data[i]["img"]}" alt=""></div>
        <div class="content">
            <span>${data[i]["name"]}</span>
            <hr>
            <span>${data[i]["position"]}</span>
        </div>
    </div>`;
  container.appendChild(creatediv);
}
for (let i = 0; i < data.length; i++) {
  showData(data, i);
}

let postEle = document.getElementsByClassName("post");

let currentIndex = 0;
postEle[0].style.display = "block";

setInterval(() => {
  // Hide the current post
  postEle[currentIndex].style.display = "none";

  // Move to the next post
  // infinite loop using %
  currentIndex = (currentIndex + 1) % data.length;

  // Display the next post after a delay
  setTimeout(() => {
    postEle[currentIndex].style.display = "block";
  }, 100);
}, 5000);
