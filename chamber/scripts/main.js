function toggleMenu() {
    document.getElementsById("#nav-bar").classList.toggle("open");
    document.getElementById("#hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("#hamburgerBtn");
x.onclick = toggleMenu;


// const datefieldUK = document.querySelector(".date");

// const now = new Date();
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
// 	dateStyle: "full"
// }).format(now);
// // long, medium, short options ... try them

// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;