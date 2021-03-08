function ImageUI(img = "lettuce") {
    return `
    <img class="food" id="lettuce-img" onmouseover="HoverUp()" onmouseout="HoverDown()"
                src="./images/${img}.png">
    
    `
}

document.querySelector("#lettuce").innerHTML += ImageUI();