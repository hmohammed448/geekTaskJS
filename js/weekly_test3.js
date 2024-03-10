// Product 1
const proPrice1 = document.getElementById("prod_1_price");
// const proCount1 = document.getElementById("prod_1_count");

// Universal btn
let btns = document.querySelectorAll(".btn");

// Iterate over each button and add event listeners
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Find the parent card element for the clicked button
    let card = e.target.closest(".card");
    console.log(card);
    // Find the span element inside the card for the count
    let spanNum = card.querySelector("span");

    // Get the current count value
    let num = parseInt(spanNum.textContent);

    // Update the count based on the clicked button
    if (e.target.textContent.trim() === "remove") {
      num--;
    } else if (e.target.textContent.trim() === "add") {
      num++;
    }

    // Update the text content of the spanNum
    spanNum.textContent = num;

    // Ensure the number doesn't go below zero
    if (num < 0) {
      alert("No negative numbers allowed!");
      num = 0;
      spanNum.textContent = num;
    }
  });
});
