// last modified date
const Update = document.lastModified
document.querySelector("#update").textContent = Update;

// year
const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.querySelector("#year").textContent = year;
