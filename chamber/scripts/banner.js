const todaysdate = new Date();
const day = todaysdate.getDay();

function bannerBar(date) {
    if (date = '6') {
        document.getElementById("nav-bar").classList.hide("hidden");
    }
}
bannerBar(day);