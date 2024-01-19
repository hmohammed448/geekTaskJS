function displayResult() {
    // parent fetched element
    let tab = document.getElementById("table");

    //ruuning a forEach loop to fetch data continous
    emojiList.forEach((e) => {

        // creating tr element
        let newRow = document.createElement("tr");
        newRow.style.fontSize = "2rem";

        // let val = e.aliases;
        // let newVal = JSON.stringify(val);
        // console.log(newVal.slice(2,-2));
        // creating td elements
        let newTd1 = document.createElement("td");
        let newTd2 = document.createElement("td");
        let newTd3 = document.createElement("td");

        // Set innerText for td elements
        newTd1.innerText = e.emoji;
        newTd2.innerText = e.aliases;
        newTd3.innerText = e.description;

        // Append td elements to tr element
        newRow.appendChild(newTd1);
        newRow.appendChild(newTd2);
        newRow.appendChild(newTd3);
        newRow.style.margin = " 5px 0px";

        tab.appendChild(newRow);
    })




}

window.onload = () => displayResult();