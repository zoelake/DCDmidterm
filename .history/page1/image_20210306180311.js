function ImageUI(img = "lettuce") {
    return `
    <img class="food" id="lettuce-img" onmouseover="HoverUp()" onmouseout="HoverDown()"
                src="./images/${img}.png">
    
    `
}

ImageUI.HoverUp = (el) => {
    el.style.bottom = "15px";
}

ImageUI.HoverDown = (el) => {
    el.style.bottom = "0px";
}
