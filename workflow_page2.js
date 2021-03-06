document.querySelector("#title1").innerHTML += titleUI("white", "#367A17", "Food Waste?", "#367A17");
document.querySelector(".facts").innerHTML += BulletsUI(250, 300, "Food waste includes any food fit for human consumption that is thrown out. Frequent discards are due to:", "./images/artichoke.png", "Oversupply", "Consumer habits", "Irregular appearances");
// document.querySelector(".swipe").innerHTML += SwipeUI();
document.querySelector("#title2").innerHTML += titleUI("#6BB25A", "#367A17", "Consider this...", "#367A17");
document.querySelector("#globe").innerHTML += globeUI();
document.querySelector(".small_fact").innerHTML += smallFactUI("./images/eaten_apple.png", "Canada's Annual Food Waste");
document.querySelector(".small_fact").innerHTML += smallFactUI("./images/car.png", "2.1 Million Cars Emissions");
document.querySelector("#title3").innerHTML += titleUI("white", "#C06447", "Click the plastic wrap for another fact", "#C06447");
document.querySelector("#wrap").innerHTML += WrapUI();
document.querySelector("#herbs").innerHTML += herbsUI();
document.querySelector("#title4").innerHTML += titleUI("white", "#C06447", "Knowledge Check!", "#C06447");
document.querySelector("#quiz").innerHTML += quizUI();
document.querySelector("#garbage").innerHTML += garbageUI();
document.querySelector("#backbutton").innerHTML += ButtonUI("< GO BACK");
