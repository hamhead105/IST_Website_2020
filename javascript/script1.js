var menuOpen = false;
var menuTarget = -420;

var menuPos = menuTarget;
var menuOpacity = 0;
var mainOpacity = 50;

var isAnimation = false;

menu.style.opacity = menuOpacity;
main.style.opacity = mainOpacity;
menu.style.marginTop = menuPos + "px";

menuButton.onclick = toggleMenu;

menu.classList.add("hidden");

function toggleMenu() {
    clearTimeout(openMenu);
    clearTimeout(closeMenu);
    //main.style.marginTop = menuPos + "px";
    if (!isAnimation) {
        isAnimation = true;
        if (menuOpen) {
            closeMenu();
            mainVisible();
            main.classList.remove("hidden");
        } else {
            openMenu();
            menuVisible(); 
            main.classList.add("hidden");
        }
    }
    //menu.classList.toggle("hidden");
    //main.classList.toggle("hidden");
}

function displayConsole() {
    console.log(menuOpacity);
    setTimeout(displayConsole, 5);
}
displayConsole();

function openMenu() {
    menu.classList.remove("hidden");
    menuOpen = true;
    menu.style.marginTop = menuPos + "px";
    menuPos += -(menuPos) / 30
    if ((0 - menuPos) > 1) {
        setTimeout(openMenu, 5)
    } else {
        isAnimation = false;
    }
}

function menuVisible() {
    console.log("vis menu");
    // menu.classList.remove("hidden");
    //main.classList.add("hidden");
    menuOpacity += 0.02;
    menu.style.opacity = menuOpacity;
    if (menuOpacity < 1) {
        setTimeout(menuVisible, 5);
    }
}

function closeMenu() {
    menuOpen = false;
    menu.style.marginTop = menuPos + "px";
    menuPos += (menuTarget - menuPos) / 30
    if ((menuPos - menuTarget) > 20) {
        setTimeout(closeMenu, 5)
    } else {
        isAnimation = false;    
        menu.classList.add("hidden");
    }
}

function mainVisible() {
    console.log("inv menu");
    menuOpacity -= 0.02;
    menu.style.opacity = menuOpacity;
    if (menuOpacity > 0) {
        setTimeout(mainVisible, 5);
    }
}
//https://coolors.co/072436-033b63-7c98ac-f5f5f5-eb6559-b1ffa6