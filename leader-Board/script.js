// FORM EventListener **************************************
document.querySelector("form").addEventListener("submit", (e) => {
  // write to prevent sending data
  e.preventDefault();

  // declaring every child into variable of form field
  const firstName = e.target.children[0].value,
    lastName = e.target.children[1].value,
    countryName = e.target.children[2].value,
    scoreNumber = e.target.children[3].value,
    errorPrompter = document.querySelector(".main-form-error");

  errorPrompter.style.display = "none";
  // checking everyfield must have some data
  // Otherwise it will show an error msg
  if (
    // firstName === "" ||
    // lastName === "" ||
    // countryName === "" ||
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

    <p class="main_wrapper-score">${scoreNumber}</p>

    <div class="main_wrapper-content3">
        <button class="main_wrapper-box-buttons tooltip">&#x1f5d1;
        </button>
        <button class="main_wrapper-box-buttons tooltip">+5
        </button>
        <button class="main_wrapper-box-buttons tooltip">-5
        </button>
        </div>`;
  // <span class="tooltiptext">Delete</span>
  // <span class="tooltiptext">+5 Score</span>
  // <span class="tooltiptext">-5 Score</span>

  // appending a child to parent
  scoreBoardContainer.appendChild(scoreBoardElement);

  // blank all fields after all
  (e.target.children[0].value = ""),
    (e.target.children[1].value = ""),
    (e.target.children[2].value = ""),
    (e.target.children[3].value = "");

  // Activate buttons event listner
  activateBtnEventListner();
});
// ******************* xxx ******************* xxx ******************

// ******************* generateDateTime FUNCTION ********************
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
// ******************* xxx ******************* xxx ******************

// **************** activateBtnEventListner FUNCTION ****************
function activateBtnEventListner() {
  console.log("Activating button event listeners...");

  // Remove existing event listeners
  document
    .querySelectorAll(".main_wrapper-content3 button")
    .forEach((button) => {
      button.removeEventListener("click", buttonClickHandler);
    });

  // Attach new event listener to each button
  document
    .querySelectorAll(".main_wrapper-content3 button")
    .forEach((button) => {
      button.addEventListener("click", buttonClickHandler);
    });
}

// Define a separate function to handle button clicks
function buttonClickHandler(e) {
  console.log("Button clicked:", e.target.textContent.trim());

  e.stopPropagation(); // Stop event propagation

  const textContent = e.target.textContent.trim();

  if (textContent === "🗑") { // delete is clicked
    // removing Box
    e.target.closest(".main_wrapper-box").remove();
    console.log("Box removed");

    
  } else if (textContent === "+5") { // +5 is clicked
    let scoreElement = e.target
      .closest(".main_wrapper-box")
      .querySelector(".main_wrapper-score");
    if (scoreElement) {
      let scoreStr = parseInt(scoreElement.textContent) + parseInt(5);
      scoreElement.innerHTML = scoreStr;
      console.log("+5 Score:", scoreStr);
    } else {
      console.log("Score element not found!");
    }


  } else if (textContent === "-5") { // -5 is clicked
    let scoreElement = e.target
      .closest(".main_wrapper-box")
      .querySelector(".main_wrapper-score");
    if (scoreElement) {
      let scoreStr = parseInt(scoreElement.textContent) - parseInt(5);
      scoreElement.innerHTML = scoreStr;
      console.log("-5 Score:", scoreStr);
    } else {
      console.log("Score element not found!");
    }
  }
}
