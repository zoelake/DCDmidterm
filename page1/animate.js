var lettuce = document.querySelector("#lettuce-img");
var tomatoe = document.querySelector("#tomatoe-img");
var potatoe = document.querySelector("#potatoe");
var apple = document.querySelector("#apple-img");
var banana = document.querySelector("#banana");

function HoverLetUp() {
    lettuce.style.bottom = "15px";
    document.getElementById("lettuce-text").style.opacity = "1";
    document.getElementById("hover").style.top = "1300px"
    document.getElementById("hover").style.width = "40%"
}

function HoverLetDown() {
    lettuce.style.bottom = "0px";
}

function HoverTomUp() {
    tomatoe.style.bottom = "15px";
    document.getElementById("tomato-text").style.opacity = "1";
}

function HoverTomDown() {
    tomatoe.style.bottom = "0px";
}

function HoverPotUp() {
    potatoe.style.bottom = "15px";
    document.getElementById("potato-text").style.opacity = "1";
}

function HoverPotDown() {
    potatoe.style.bottom = "0px";
}

function HoverAppUp() {
    apple.style.bottom = "15px";
    document.getElementById("apple-text").style.opacity = "1";
}

function HoverAppDown() {
    apple.style.bottom = "0px";
}

function HoverBanUp() {
    banana.style.bottom = "15px";
    document.getElementById("banana-text").style.opacity = "1";
}

function HoverBanDown() {
    banana.style.bottom = "0px";
}

function NextPage() {
    //this will need to be changed once i have a link to the next page
    var url = "../workflow_page2.html";
    location.replace(url);
}