let viewContainer = document.querySelector("#viewListContainer");
let inputField = document.querySelector("#inputText");
let colorValue = document.querySelector("#colour");
let textAreaValue = document.querySelector("#textArea");

let universalObject = [];

function createNote() {
  // Date
  let date = new Date();
  let day = date.toString();
  let get = day.split(" ");

  // Create Note
  let createCard = document.createElement("div");
  createCard.classList.add("notelist");
  createCard.innerHTML = `
    <h4 class="title">${inputField.value}</h4>
    <textarea class="textAreaInput" readonly>${textAreaValue.value}</textarea>
    <div class="detailIcons">
        <div class="cancel"><span class="material-symbols-outlined">cancel</span></div>
        <div class="edit"><span class="material-symbols-outlined">edit_note</span></div>
    </div>
    <div class="date"><span class="material-symbols-outlined">schedule</span><small class="time">${get[0]} ${get[2]} ${get[1]}, ${get[3]}</small></div>`;

  createCard.style.backgroundColor = colorValue.value;
  viewContainer.appendChild(createCard);
  let can = document.querySelectorAll(".cancel");

  // Remove Note
  Array.from(can).forEach((ele) => {
    ele.addEventListener("click", () => {
      ele.parentNode.parentNode.remove();
    });
  });
}

document.querySelector("button").addEventListener("click", createNote);
