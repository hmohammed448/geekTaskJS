let createList = `<div class="notelist">
<h4 class="title">Title</h4>
<textarea class="textAreaInput" readonly>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</textarea>
<div class="detailIcons">
    <div class=""><span class="material-symbols-outlined">cancel</span></div>
    <div class=""><span class="material-symbols-outlined">edit_note</span></div>
</div>
<div class="date"><span class="material-symbols-outlined">schedule</span><small class="time">Sat, Apr 13,
        2024, 11:06 PM</small></div>
</div>`;

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
        <div class=""><span class="material-symbols-outlined">cancel</span></div>
        <div class=""><span class="material-symbols-outlined">edit_note</span></div>
    </div>
    <div class="date"><span class="material-symbols-outlined">schedule</span><small class="time">${get[0]} ${get[2]} ${get[1]}, ${get[3]}</small></div>`;

  createCard.style.backgroundColor = colorValue.value;

  viewContainer.appendChild(createCard);
}

document.querySelector("button").addEventListener("click", createNote);
