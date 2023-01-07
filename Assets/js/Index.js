let button = document.getElementById("buttonImg");
let navigation = document.getElementById("navSelector");
let buttonWhite = document.getElementById("buttonImgWhite");

function navdisplaywhite() {
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
        button.style.display = "flex";
        buttonWhite.style.display = "none";
    } else {
        navigation.style.display = "flex";
    }
}

function navdisplayblack() {
    if (navigation.style.display === "none") {
        button.style.display = "none";
        buttonWhite.style.display = "flex";
        navigation.style.display = "flex";
    } else {
        navigation.style.display = "none";
    }
}
