let btnDecre = document.getElementById("decre");
let btnIncre = document.getElementById("incre");

let print = document.getElementById("paraField");

let val = "";

function funcIncreament() {
    val++;
    print.innerText = val;
    console.log(val);
}
function funcDecreament() {
    val--;
    print.innerText = val;
    console.log(val);
}
function reset() {
    val = 0;
    print.innerText = val;
    console.log(val);
}

