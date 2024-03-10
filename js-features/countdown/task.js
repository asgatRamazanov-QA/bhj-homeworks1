let time = 10;
let timeId = setInterval(updateCountDown,1000);

function updateCountDown() {
    time= document.getElementById("timer");
    time.textContent--;
    if(time.textContent ==="0") {
        clearInterval(timeId);
        alert("Вы победили в конкурсе");
    }
}