// Product 1
const proPrice1 = document.getElementById("prod_1_price");

let cartDiv = document.querySelector("#cartDiv");

let productsList = [
  {
    naam: "Products-1",
    quantity: 0,
    price: 100,
  },
  {
    naam: "Products-2",
    quantity: 0,
    price: 200,
  },
  {
    naam: "Products-3",
    quantity: 0,
    price: 300,
  },
];

let productDiv = document.querySelector(".productDiv");

window.addEventListener("load", () => {
  productsList.forEach(function (product) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<p class="prodName">${product.naam}</p>
  <p class="price">${product.price}</p>
  <p class="btn">
    <i class="material-symbols-outlined remove"> remove </i>
    <span id="prodCount">${product.quantity}</span>
    <i class="material-symbols-outlined add"> add </i>
  </p>`;

    productDiv.append(div);
  });
});

// Universal btn
let btns = document.querySelectorAll(".btn");

// console.log(productDiv);
productDiv.addEventListener("click", function (e) {
  // console.log(e.target.classList.contains("add"));
  if (e.target.classList.contains("add")) {
  } else if (e.target.classList.contains("remove")) {
  }
});

// Iterate over each button and add event listeners
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Find the parent card element for the clicked button
    let card = e.target.closest(".card");
    // console.log(card);
    // Find the span element inside the card for the count
    let spanNum = card.querySelector("span");

    // Get the current count value
    let num = parseInt(spanNum.textContent);

    // Update the count based on the clicked button
    if (e.target.textContent.trim() === "remove") {
      num--;
    } else if (e.target.textContent.trim() === "add") {
      num++;

      // Get product information
      let productName = card.querySelector(".prodName").textContent;
      let productQ = card.querySelector("span").textContent;
      let productQty = parseInt(card.querySelector("span").textContent);
      let productP = card.querySelector(".price").textContent;
      let productPrice = parseInt(card.querySelector(".price").textContent);

      // Add product to the products list
      productsList.push({
        naam: productName,
        quantity: productQty,
        price: productPrice,
      });

      renderCart();
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

// Function to render the cart display
function renderCart() {
  // Clear existing cart content
  cartDiv.innerHTML = "";

  // Iterate over productsList and add each product to the cart display
  productsList.forEach((product, index) => {
    if (product.quantity > 0) {
      let cartItem = document.createElement("div");
      cartItem.classList.add("card");
      cartItem.innerHTML = `
      <p>${product.naam}</p>
      <p class="qty">${product.quantity}</p> x <span>${product.price}</span>
      `;
      cartDiv.appendChild(cartItem);
    }
  });
}
