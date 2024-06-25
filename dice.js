const rollbtn = document.getElementById("roll");
let count = 0;
const countlable = document.getElementById("countlable");


rollbtn.onclick = function () {
    count = Math.floor(Math.random() * 6 + 1);
    countlable.textContent = count;

}

var btn = document.getElementById("showNote");

btn.onclick = function () {
    alert("You can use enter key to roll the dice!")
}

