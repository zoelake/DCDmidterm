
imgTimer = null

function HoverImg() {
    var lettuce = document.querySelector("#lettuce-img");
    lettuce.style.bottom = "15px";
}

lettuce.onmouseover = function () {
    lettuce = setInterval(HoverImg, 3)
}

lettuce.onmouseout = function () {
    clearInterval(imgTimer)
    imgTimer = null
}