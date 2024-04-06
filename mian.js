const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("second");

function updateTime() {
    let date = new Date();
    hours.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
    minutes.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    seconds.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

}

setInterval(updateTime, 1000);

updateTime();
