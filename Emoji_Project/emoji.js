
function displayResult() {
    // parent fetched element
    let tab = document.getElementById("table");

    //ruuning a forEach loop to fetch data continous
    emojiList.forEach((e) => {
        // creating tr element
        let newRow = document.createElement("tr");
        newRow.style.fontSize = "2rem";
        // creating td elements
        let newTd1 = document.createElement("td");
        let newTd2 = document.createElement("td");
        let newTd3 = document.createElement("td");
        newRow.appendChild(document.createElement("hr"));

       
        newRow.appendChild(newTd1).innerText = e.emoji;
        newRow.appendChild(newTd2).innerText = e.aliases;
        newRow.appendChild(newTd3).innerText = e.description;
        newRow.style.margin = " 5px 0px";

        tab.appendChild(newRow);

        // console.log(e.emoji, e.aliases, e.description);
    })




}

window.onload = () => displayResult();