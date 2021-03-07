var lettuce = document.querySelector("#lettuce-img");
imgTimer = null;

function HoverImgUp() {
    lettuce.style.bottom = "15px";
}

function HoverImgDown() {
    lettuce.style.bottom = "0px";
}

lettuce.onmouseover = function () {
    imgTimer = setInterval(HoverImgUp, 200)
}

lettuce.onmouseout = function () {
    clearInterval(imgTimer)
    imgTimer = null
}