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

    let childEle = document.createElement("div"); // to store div 
    childEle.classList.add("divChildBox"); // attribute
    childEle.innerHTML = `<p>${textArea.value}</p>`; // paragraph into div
    childEle.style.backgroundColor = color.value;

    parentEle.appendChild(childEle);
    textArea.value = "";
});

