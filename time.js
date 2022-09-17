// let date1 = Date.parse(document.lastModified);

// const date1 = document.querySelector("#date1");

// date1.textContent = `Last Update: ${new
// Date().toLocaleDateString("en-UK")}`;

// const d = new Date();
// const year = d.getFullYear();

// let today = new Date();
// let date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`;
// document.getElementById("date1").value = date;

function date() {
    document.getElementById('date1').innerHTML = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`;
}