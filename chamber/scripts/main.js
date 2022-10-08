function toggleMenu() {
    document.getElementsById("#nav-bar").classList.toggle("open");
}

const x = document.getElementById("#hamburgerBtn");
x.onclick = toggleMenu;