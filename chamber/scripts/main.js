function toggleMenu() {
    document.getElementsById("#nav-bar").classList.toggle("open");
    document.getElementById("#hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("#hamburgerBtn");
x.onclick = toggleMenu;