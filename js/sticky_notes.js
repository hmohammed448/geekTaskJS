// taking input of text area and color
let textArea = document.getElementById("textPicker");
let color = document.getElementById("colorPicker");


let parentEle = document.getElementById("notesEle");
let trigger = document.getElementById("btn");

// setTimeout(newChildPanel, 5000);

trigger.addEventListener("click", (e) => {
    if (textArea.value === "") {
        alert("Enter Some Text");
        return;
    }
    document.getElementById("blankP").style.display = "none";

    let card = document.createElement("div"); // to store div 
    card.classList.add("divChildBox"); // attribute
    card.style.backgroundColor = color.value;

    // paragraph into div
    let p = document.createElement("p");
    p.innerText = textArea.value;
    card.appendChild(p);

    // for creating X btn on list
    let closeBtn = document.createElement("i");
    closeBtn.classList.add("material-symbols-outlined");
    closeBtn.innerText = " close ";
    card.appendChild(closeBtn);

    // close to remove btn
    closeBtn.addEventListener("click", (e) => {
        closeBtn.parentElement.remove();
    });

    parentEle.appendChild(card);
    textArea.value = "";
});
