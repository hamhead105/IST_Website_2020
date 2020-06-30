subTitle.style.opacity = 0;
mainTitle.style.opacity = 0;

var currentOpacity = 0;
var titlePos = 100;

function opac() {
    currentOpacity += 0.01;
    mainTitle.style.opacity = currentOpacity;
    subTitle.style.opacity = currentOpacity;
    if (currentOpacity < 1) {
        setTimeout(opac, 5)
    }
}

function moveAppear() {
    main.style.marginTop = titlePos + "px";
    titlePos -= 1;
    if (titlePos > 0) {
        setTimeout(moveAppear, 5)
    }
}

setTimeout(moveAppear, 300)
setTimeout(opac, 300)


//https://coolors.co/072436-033b63-7c98ac-f5f5f5-eb6559-b1ffa6