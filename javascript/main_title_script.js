subTitle.style.opacity = 0;
mainTitle.style.opacity = 0;

var currentOpacity = 0;

function opac() {
    currentOpacity += 0.01;
    mainTitle.style.opacity = currentOpacity;
    subTitle.style.opacity = currentOpacity;
    setTimeout(opac, 5)
}

setTimeout(opac, 500)


//https://coolors.co/072436-033b63-7c98ac-f5f5f5-eb6559-b1ffa6