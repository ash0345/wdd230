// last modified date
const Update = document.lastModified
document.querySelector("#update").textContent = Update;

// year
const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.querySelector("#year").textContent = year;

//current date
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(todaysdate);
document.querySelector(".date").textContent = fulldateUK;

// form date
document.querySelector("#date").textContent = Update;
document.querySelector("#time").textContent = Update;

// const day = todaysdate.getDate();
// const month = todaysdate.getMonth() + 1;
// if (day < 10) {
//   day = "0" + day;
// }
// if (month < 10) {
//   month = "0" + month;
// }
// document.getElementById("date").value = day + "/" + month + "/" + year;

// const hours = datodaysdatete.getHours();
// const mins = todaysdate.getMinutes();
// const seconds = todaysdate.getSeconds();
// if (hours < 10) {
//   hours = "0" + hours;
// }
// if (mins < 10) {
//   mins = "0" + mins;
// }
// document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
