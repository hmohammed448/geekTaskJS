let viewContainer = document.querySelector("#viewListContainer");
let inputField = document.querySelector("#inputText");
let colorValue = document.querySelector("#colour");
let textAreaValue = document.querySelector("#textArea");

let universalObject = [];

function createNote() {
  event.preventDefault(); // Prevent default button behavior

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
            <div class="save"><span class="material-symbols-outlined">save</span></div>
        </div>
        <div class="date">
            <span class="material-symbols-outlined">schedule</span>
            <small class="time">${get[0]} ${get[2]} ${get[1]}, ${get[3]}</small>
        </div>`;

  createCard.style.backgroundColor = colorValue.value;
  viewContainer.appendChild(createCard);

  let can = createCard.querySelector(".cancel");

  // Remove Note
  can.addEventListener("click", () => {
    createCard.remove();
  });

  let editButtons = createCard.querySelectorAll(".edit");
  let saveTextArea = createCard.querySelectorAll(".save");

  // Remove previous event listeners for "Edit" buttons
  editButtons.forEach((element) => {
    element.removeEventListener("click", editTextArea);
  });

  // Add event listener for each "Edit" button
  editButtons.forEach((element) => {
    element.addEventListener("click", editTextArea);
  });

  // Remove previous event listeners for "Edit" buttons
  saveTextArea.forEach((element) => {
    element.removeEventListener("click", saveEditText);
  });

  // Add event listener for each "Edit" button
  saveTextArea.forEach((element) => {
    element.addEventListener("click", saveEditText);
  });

  // Attach event listener to the newly created note
  // createCard.addEventListener("click", handleNoteActions);

  inputField.value = "";
  textAreaValue.value = "";
}
document.querySelector("button").addEventListener("click", createNote);

// Event handler for "editTextArea" field
function editTextArea(event) {
  let ele = event.target.parentNode.parentNode.parentNode.children[1];
  ele.removeAttribute("readonly");
  ele.setAttribute("cols", "30");
  ele.setAttribute("rows", "10");
  ele.style.background = "#ffffff";
}
// Event handler for "saveEditText" field
function saveEditText(event) {
  let ele = event.target.parentNode.parentNode.parentNode.children[1];
  ele.style.background = "transparent";
  ele.removeAttribute("cols");
  ele.removeAttribute("rows");
  ele.setAttribute("readonly", "");
}

// 2nd approach remove 71 - 85 and 45 - 63
// Event handler for note actions (edit, save, cancel)
// function handleNoteActions(event) {
//   const target = event.target;
//   const parentNote = target.closest(".notelist");

//   if (!parentNote) return; // Ignore clicks outside notes

//   if (target.classList.contains("edit")) {
//       const textArea = parentNote.querySelector(".textAreaInput");
//       textArea.removeAttribute("readonly");
//       textArea.setAttribute("cols", "30");
//       textArea.setAttribute("rows", "10");
//   } else if (target.classList.contains("save")) {
//       const textArea = parentNote.querySelector(".textAreaInput");
//       textArea.removeAttribute("cols");
//       textArea.removeAttribute("rows");
//       textArea.setAttribute("readonly", "");
//   } else if (target.classList.contains("cancel")) {
//       parentNote.remove();
//   }
// }
