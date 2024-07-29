// Counter Program

const increaseBtn = document.getElementById("increaseBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const countLabel = document.getElementById("countLabel")
let counter = document.getElementById("countLabel").value

let count = 0

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    countLabel.textContent = 0
}