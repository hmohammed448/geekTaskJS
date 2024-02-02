function getAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++)
        sum += arguments[i];
    return sum;
}


let arr = [23, 34, 2, 3, 52, 5, 46, 67, 13, 5];
let answer = getAll(...arr);
console.log(answer);