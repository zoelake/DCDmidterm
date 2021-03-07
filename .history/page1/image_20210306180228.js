function ImageUI(img = "lettuce") {
    return `
    <img class="food" id="lettuce-img" onmouseover="HoverUp()" onmouseout="HoverDown()"
                src="./images/${img}.png">
    
    `
}

ImageUI.HoverUp() {
    lettuce.style.bottom = "15px";
}

ImageUI.HoverDown() {
    lettuce.style.bottom = "0px";
}
