// const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
// document.getElementById("date1").textContent = new Date().toLocaleDateString('en-US', options);

// const yearoptions = {year: 'numeric'};
// document.getElementById("year").textContent = new Date().toLocaleDateString('en-US', yearoptions);

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear;
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementById('date1').textContent = currentdate;
