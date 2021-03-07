function ImageUI(img = "lettuce") {
    return `
    <img class="food" id="lettuce-img" onmouseover="HoverUp()" onmouseout="HoverDown()"
                src="./images/${img}.png">
    
    `
}

function HoverUp() {
    lettuce.style.bottom = "15px";
}

function HoverDown() {
    lettuce.style.bottom = "0px";
}
