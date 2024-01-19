function displayResult() {
    // parent fetched element
    let tab = document.getElementById("table");

    //ruuning a forEach loop to fetch data continous
    emojiList.forEach((e) => {

        // creating tr element
        let newRow = document.createElement("tr");
        newRow.style.fontSize = "2rem";

        let val = e.aliases;
        let str = e.aliases.map(item => item.replaceAll("_", " "))
        let printString = str.toString();

        // creating td elements
        let newTd1 = document.createElement("td");
        let newTd2 = document.createElement("td");
        let newTd3 = document.createElement("td");

        // // Set innerText for td elements
        newTd1.innerText = e.emoji;
        newTd2.innerText = printString;
        newTd3.innerText = e.description;

        // // Append td elements to tr element
        newRow.appendChild(newTd1);
        newRow.appendChild(newTd2);
        newRow.appendChild(newTd3);
        newRow.style.margin = " 5px 0px";

        tab.appendChild(newRow);

    })
}

window.onload = () => displayResult();

// input trigger function
const inputTriger = () => {
    let fetchText = document.getElementById("inputSearch").value.toUpperCase();
    console.log(fetchText.value);

    // let table = document.getElementById("table");
    let everyRow = document.querySelectorAll("tr");
    console.log(everyRow);

    everyRow.forEach(item => console.log(item));

    for (let i = 0; i < everyRow.length; i++) {
        let td = everyRow[i].getElementsByTagName("td")[1];
        console.log(everyRow[i]);
        // if (td) {
        let listValue = td.textContent || td.innerHTML;

        if (listValue.toUpperCase().indexOf(fetchText) > -1) {
            everyRow[i].style.display = "";
        } else {
            everyRow[i].style.display = "none";
        }
        // }
    }
};
