var img = document.querySelector(".food");
imgTimer = null

function HoverImg() {
    img.style.bottom = "15px";
}

img.onmouseover = function () {
    img = setInterval(HoverImg, 3)
}

img.onmouseout = function () {
    clearInterval(imgTimer)
    imgTimer = null
}