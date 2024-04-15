let userName = document.querySelector("input");
let btn = document.querySelector("button");

async function fetchData() {
  let inp = userName.value;
  let response = await fetch(`https://api.github.com/users/${inp}`);
  let data = await response.json();
  userDataDisplay(data);
  userName.value = "";
  console.log(data);
}
btn.addEventListener("click", fetchData);

let display = document.querySelector(".display");
function userDataDisplay(data) {
  let d = data.created_at;
  let arr = d.split("T");
  let splitArr = arr[0].split("-");
  let splitArrAgain = splitArr;
  //   console.log(splitArrAgain);
  display.innerHTML = "";
  let userCard = document.createElement("div");
  userCard.classList.add("user-card");
  userCard.innerHTML = `<div class="loader">
      <div class="head d-flex center">
          <img src="${data.avatar_url}" alt="${data.name}"
              class="photo">
          <div class="flexAll">
              <div>
                  <h1 class="name fw-bold">${data.name}</h1>
                  <a href="${data.html_url}" class="username"
                      target="_blank">@${data.login}</a>
              </div>
              <div>
                  <p class="joined">Joined ${
                    splitArrAgain[1] +
                    "/" +
                    splitArrAgain[2] +
                    "/" +
                    splitArrAgain[0]
                  }</p>
              </div>
          </div>
      </div>
  </div>
  <div class="details">
      <p class="bio">${data.bio}</p>
      <ul class="card d-flex between center">
          <li>
              <h6 class="mb-2">Repos</h6>
              <span class="fw-bold">${data.public_repos}</span>
          </li>
          <li>
              <h6 class="mb-2">Followers</h6>
              <span class="fw-bold">${data.followers}</span>
          </li>
          <li>
              <h6 class="mb-2">Following</h6>
              <span class="fw-bold">${data.following}</span>
          </li>
      </ul>
      <div class="links flexAll">
          <ul>
              <li>
                  <i class="fas fa-fw fa-map-marked-alt"></i>
                  <span>${data.location}</span>
              </li>
              <li>
                  <i class="fas fa-fw fa-link"></i>
                  <span>${data.blog}</span>
              </li>
          </ul>
          <ul>
              <li>
                  <i class="fab fa-fw fa-twitter"></i>
                  <span>${data.twitter_username}</span>
              </li>
              <li>
                  <i class="fas fa-fw fa-building"></i>
                  <span>${data.company}</span>
              </li>
          </ul>
      </div>
  </div>`;

  return display.appendChild(userCard);
}
