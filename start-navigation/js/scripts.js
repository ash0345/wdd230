function toggleMenu() {
    document.getElementsById("#primaryNav").classList.toggle("open");
}

const x = document.getElementById("#hamburgerBtn");
x.onclick = toggleMenu;