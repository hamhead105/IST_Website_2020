menu.classList.add("hidden");
var menuOpen = false;

menuButton.onclick = toggleMenu;

function toggleMenu() {
    if (menuOpen) {
        menu.classList.add("hidden");
    } else {
        menu.classList.add("visible");
    }
    menuOpen = !menuOpen;
}







// https://coolors.co/072436-033b63-7c98ac-f5f5f5-eb6559