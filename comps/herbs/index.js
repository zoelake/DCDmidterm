function herbsUI(){
  return `
    <div style="padding: 20px" onclick='herbsUI.HandleClick(this)'>
      <img src="./images/herbs.png" id="herbimg" style="transform: rotate(-20deg);" width="150px">
    </div>
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    ">
      <p id="clickme" style="
      font-size: 46px;
      font-family: 'Permanent Marker', cursive;
      color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #C06447;
      text-shadow: 2px 2px 2px #C06447;
      margin-bottom: 0px;
      ">Click me!</p>
      <img src="./images/arrow.png" width="100px" id="arrow">
    </div>
  `
}

herbsUI.HandleClick = (el) => {

  document.querySelector("#herbimg").style.transform = "rotate(0deg)";
  document.querySelector("#clickme").innerHTML = "And according to the US Environmental Protection Agency (EPA), food and food packaging materials make up ≈50% of all municipal solid waste."
  document.querySelector("#clickme").style.fontSize = "20px"
  document.querySelector("#clickme").style.fontFamily = "Futura"
  document.querySelector("#clickme").style.fontWeight = "400"
  document.querySelector("#clickme").style.webkitTextStrokeColor = "white"
  document.querySelector("#arrow").style.display = "none"

}

