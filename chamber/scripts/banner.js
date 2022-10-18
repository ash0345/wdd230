const date = new Date();
const day = date.getDay();

let weekDay;

function bannerBar(weekDay) {
    let message;
    if (weekDay != 1 && weekDay != 2) {
        message = document.getElementById("welcome").classList.hide("hidden");
    }
}
bannerBar(day);