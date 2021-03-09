document.querySelector("#benefits").innerHTML += FourBulletsUI(310, 250, "./images/onion.png", "Reduced carbon emissions", "Reduced food waste", "Reduced packaging waste", "Reduced pesticide ingestion");
document.querySelector("#swipeUp").innerHTML += SwipeUI();
document.querySelector("#growing").innerHTML += titleUI("white", "#B14D4E", "Growing food at home", "#B14D4E");
document.querySelector("#alternatives").innerHTML += BulletsUI("300", "280", "Besides growing food on a farm or in the ground, some great alternatives include:", bulletImg="./images/artichoke.png", bullet1="Indoor gardens", bullet2="Balconies/patio spaces", bullet3="Community gardens")
document.querySelector("#watering").innerHTML += waterUI()
document.querySelector("#backbutton3").innerHTML += ButtonUI("< GO BACK");