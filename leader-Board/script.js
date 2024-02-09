// let form = document.querySelector("form");
// let addPlayerBtn = document.querySelector(".main_form-submit-btn");
document.querySelector("form").addEventListener("submit", (e) => {
  // write to prevent sending data
  e.preventDefault();

  const firstName = e.target.children[0].value,
    lastName = e.target.children[1].value,
    countryName = e.target.children[2].value,
    scoreNumber = e.target.children[3].value,
    errorPrompter = document.querySelector(".main-form-error");

  errorPrompter.style.display = "none";

  if (
    firstName === "" ||
    lastName === "" ||
    countryName === "" ||
    scoreNumber === ""
  ) {
    return (errorPrompter.style.display = "block");
  }

  let scoreBoardContainer = document.querySelector(".main_wrapper");
  const scoreBoardElement = document.createElement("div");
  scoreBoardElement.classList.add("main_wrapper-box");

  scoreBoardElement.innerHTML = `
<div class="main_wrapper-content">
    <p class="main_wrapper-name" id="first-p">${firstName} ${lastName}</p>
    <p class="main_wrapper-time" id="second-p">${generateDateTime()}</p>
</div>
<div class="main_wrapper-content2">
    <p class="main_wrapper-country">${countryName}</p>
</div>
<div class="main_wrapper-content4">
    <p class="main_wrapper-score">${scoreNumber}</p>
</div>
<div class="main_wrapper-content3">
    <button class="main_wrapper-box-buttons tooltip">&#x1f5d1;
        <span class="tooltiptext">Delete</span>
    </button>
    <button class="main_wrapper-box-buttons tooltip">⬆️
        <span class="tooltiptext">+5 Score</span>
    </button>
    <button class="main_wrapper-box-buttons tooltip">⬇️
        <span class="tooltiptext">-5 Score</span>
    </button>
</div>`;

  scoreBoardContainer.appendChild(scoreBoardElement);

  (e.target.children[0].value = ""),
    (e.target.children[1].value = ""),
    (e.target.children[2].value = ""),
    (e.target.children[3].value = "");
});

// generateDateTime
function generateDateTime() {
  let newDate = new Date();
  // console.log("Fresh Date", newDate);
  let timeStamp = newDate.toLocaleString().slice(-8);
  // console.log("Time", timeStamp);
  let month = newDate.toLocaleString("default", { month: "long" });
  // console.log("Month", month);
  let year = newDate.getFullYear();
  // console.log("Year", year);
  return `${month} ${year} : ${timeStamp}`;
}
